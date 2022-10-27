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
      <CategoryForm @add-category="addCategory" />
    </div>
    <Categories
      v-if="categories.length"
      :categories="categories"
    />
    <button
      v-if="categories.length"
      class="btn btn-primary mt-2 ms-2"
      @click="showCategoryForm = !showCategoryForm"
    >
      Create category
    </button>
    <CategoryForm
      v-if="showCategoryForm"
      @add-category="addCategory"
    />
  </div>
</template>

<script setup>
import { useCategoryStore } from "@/stores/category.js";
import CategoryForm from "./Categories/CategoryForm.vue";
import Categories from "./Categories/Categories.vue";

import { ref, onBeforeMount } from "vue";

const categoryStore = useCategoryStore();
let categories = ref([]);
let showLoader = ref(true);
let showCategoryForm = ref(false);

async function addCategory(category) {
  try {
    console.log(category);
    await categoryStore.addCategory(category);
    const response = await categoryStore.getCategories();
    categories.value = [...response.data.categories];
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
// .dashboard {
//   text-align: center;
//   margin-top: 45px;
//   border-radius: 15px;
//   padding: 70px;
//   background-color: rgb(255, 255, 255);
//   height: 600px;
//   min-height: 400px;
//   margin-right: 200px;
// }
// @media (max-width: 768px) {
//   .dashboard {
//     margin: 0 auto;
//   }
// }

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
