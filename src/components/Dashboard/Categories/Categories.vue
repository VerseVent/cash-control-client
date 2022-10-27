<template>
  <div class="decor__container rounded">
    <h1 class="categories__title">
      Purchase Categories
    </h1>
    <ul class="categories">
      <li
        v-for="category in props.categories"
        :key="category.categoryId"
        class="categories__item"
      >
        <button
          type="button"
          class="btn btn-primary"
        >
          {{ category.categoryTitle }}
          <span class="badge">4</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>

<style lang="scss">
.decor__container {
  background-color: rgb(255, 255, 255);
  padding: 20px;
  margin-top: 20px;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  &__title {
    font-size: 24px;
    color: black;
    margin: 15px 0;
  }
  &__item {
    margin: 10px 10px 10px 0;
    button {
      background-color: rgb(102, 117, 255);
    }
  }
}
</style>
