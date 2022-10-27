<template>
  <div class="row gx-0">
    <div class="col-md-10 col-lg-6 col-xl-7 bg-white p-4 rounded mt-4 mx-auto">
      <h1 class="category__title">
        Create purchase category
      </h1>

      <form
        class="category__form"
        @submit.prevent="emitAddCategory"
      >
        <label class="text-start mt-4 mx-1"> Category title </label>
        <input
          id="category-text"
          v-model="category.categoryTitle"
          class="category__input"
          type="text"
        >
        <button class="category__btn">
          Create
        </button>
        <h2 class="app__title">
          © Cash Control
        </h2>
      </form>
    </div>
  </div>
</template>
<script setup>
import { defineEmits, ref } from "vue";
let category = ref({ categoryTitle: "" });
const emit = defineEmits(["add-category"]);
const emitAddCategory = () => {
  emit("add-category", category.value.categoryTitle);
  category.value = { categoryTitle: "" };
};
</script>

<style lang="scss">
.category {
  &__form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  &__title {
    font-size: 24px;
  }
  &__input {
    background: rgb(192, 255, 190);
    padding: 15px;
    height: 40px;
    border: 2px solid #15d798;
    border-radius: 15px;
    margin: 10px 0;
    &:focus {
      background: #ffffff;
    }
  }
  &__btn {
    margin-top: 40px;
    background: #15d798;
    border-radius: 15px;
    padding: 20px 45px;
    color: #ffffff;
    display: inline-block;
    font: normal bold 26px/1 "Open Sans", sans-serif;
    text-align: center;
  }
}
.app__title {
  margin-top: 10%;
}
</style>
