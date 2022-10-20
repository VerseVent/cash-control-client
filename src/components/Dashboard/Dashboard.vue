<template>
  <div
    v-if="showLoader"
    class="loader"
  >
    Loading...
  </div>
  <div v-else>
    <div
      v-if="!categories.length"
      class="dashboard"
    >
      <h1 class="category__title">
        Create purchase category
      </h1>
      <form
        class="category__form"
        @submit.prevent="addCategory"
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
    <Categories :categories="categories" />
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/category.js";
import Categories from "./Categories/Categories.vue";

import { ref, onBeforeMount } from "vue";
const category = ref({
  categoryTitle: "",
});
const categoryStore = useCategoryStore();
let categories = ref([]);
let showLoader = ref(true);

async function addCategory() {
  try {
    await categoryStore.addCategory(category.value);
    const response = await categoryStore.getCategories();
    categories.value = [...categories.value, ...response.data.categories];
  } catch (e) {
    console.log(e);
  }
}
onBeforeMount(async () => {
  showLoader.value = true;
  try {
    const response = await categoryStore.getCategories();
    categories.value = [...categories.value, ...response.data.categories];
    showLoader.value = false;
  } catch (e) {
    showLoader.value = false;
  }
});
</script>

<style lang="scss">
.dashboard {
  text-align: center;
  margin-top: 45px;
  border-radius: 15px;
  padding: 70px;
  background-color: rgb(255, 255, 255);
  height: 600px;
  min-height: 400px;
  margin-right: 200px;
}
@media (max-width: 768px) {
  .dashboard {
    margin: 0 auto;
  }
}
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
  margin-top: 90%;
}

.loader,
.loader:before,
.loader:after {
  background: #ffffff;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: "";
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
