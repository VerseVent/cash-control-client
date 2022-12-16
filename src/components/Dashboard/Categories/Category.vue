<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useCategoryStore } from "@/stores/category.js";

import { usePurchaseStore } from "@/stores/purchase.js";
const purchaseStore = usePurchaseStore();
const route = useRoute();
const purchaseTitle = ref("");
const purchasePrice = ref(0);
const purchasesSum = ref(0);
const allPurchases = ref([]);
onMounted(async () => {
  const { data } = await purchaseStore.getPurchases(route.params.categoryId);
  allPurchases.value = [...data.result.purchases];

  console.log(allPurchases.value);
});
async function addPurchase() {
  if (purchaseTitle.value.length >= 1 && purchasePrice.value > 0) {
    try {
      const lastAdded = await purchaseStore.addPurchaseItem(
        route.params.categoryId,
        purchaseTitle.value,
        purchasePrice.value
      );
      console.log(lastAdded.data.purchases);
      allPurchases.value = [...lastAdded.data.purchases];
    } catch (e) {
      console.log(e);
    }
  }
}
const countSum = computed(() => {
  return allPurchases.value.reduce((accum, purchase) => {
    return accum + Number(purchase.purchasePrice);
  }, purchasesSum.value);
});


    const categoryStore = useCategoryStore();
    const purchase = ref("");
    const isFormShowed = ref(false);
    const currentPurchases = ref([]);
    const categoryTitle = ref({});
    async function getAllPurchases() {
      const {
        data: { result },
      } = await purchaseStore.getPurchases(route.params.categoryId);
      currentPurchases.value = result.purchases;
      const {
        data: { categories },
      } = await categoryStore.getCategories();
      categoryTitle.value = categories.find(
        (item) => item.categoryId === Number(route.params.categoryId)
      ).categoryTitle;
    }
    getAllPurchases();
    // async function addPurchase() {
    //   const res = await purchaseStore.addPurchaseItem(
    //     route.params.categoryId,
    //     purchase.value,
    //     purchasePrice.value
    //   );
    //   currentPurchases.value = [...res.data.purchases];
    //   console.log(res);
    // }
</script>
<template>
  <div class="col-md-10 col-lg-6 col-xl-7 bg-white p-4 rounded mt-4 mx-auto">
    <h1 class="category__title">Add purchase</h1>

    <form class="category__form" @submit.prevent="emitAddCategory">
      <label class="text-start mt-4 mx-1"> Purchase title: </label>
      <input
        id="category-text"
        v-model="purchaseTitle"
        class="category__input"
        type="text"
      />
      <label class="text-start mt-4 mx-1"> Price: </label>
      <input
        id="category-text"
        v-model="purchasePrice"
        class="category__input"
        type="number"
      />
      <button class="category__btn" @click="addPurchase">
        Add new purchase
      </button>
      <h2 class="app__title">© Cash Control</h2>
    </form>
    <div>
      <h1 class="text-center p-3 fs-4 text-black">Your last purchases</h1>
      <ul class="list-group">
        <li
          v-for="(item, index) in allPurchases"
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          {{ item.purchaseTitle }}
          <span class="badge bg-primary rounded-pill">{{
            item.purchasePrice
          }}</span>
        </li>
      </ul>
      <span class="badge bg-primary rounded-pill mt-3 p-2"
        >Sum: {{ countSum }}</span
      >
    </div>
  </div>
  <template>
    <div>
      <div class="bg-white p-4 mt-5 rounded-3">
        <h1 class="fs-3 text-black py-4">
          {{ categoryTitle }}
        </h1>
        <ul class="list-group">
          <li
            v-for="item in currentPurchases"
            :key="item.id"
            class="list-group-item py-3"
          >
            <div class="d-flex justify-content-between">
              <p class="fs-5">Title: {{ item.purchaseTitle }}</p>
              <p class="fs-5">
                Spent:
                <span class="text-success">{{ item.purchasePrice }}$</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <button
        class="bg-primary text-white p-2 mt-2 fs-5 rounded-3"
        @click="isFormShowed = !isFormShowed"
      >
        Add purchase
      </button>
      <div
        v-if="isFormShowed"
        class="col-md-10 col-lg-6 col-xl-7 bg-white p-4 rounded mt-4 mx-auto"
      >
        <div class="d-flex justify-content-between">
          <h1 class="category__title">Add purchase</h1>
          <button class="category__btn p-3 m-0 fs-4" @click="addPurchase">
            Add
          </button>
        </div>
        <form class="category__form" @submit.prevent="addPurchase">
          <label class="text-start mt-4 mx-1"> Purchase title </label>
          <input
            id="category-text"
            v-model="purchase"
            class="category__input"
            type="text"
          />
          <label class="text-start mt-4 mx-1"> Purchase price </label>

          <input
            id="category-text"
            v-model="purchasePrice"
            class="category__input"
            type="number"
          />
        </form>
      </div>
    </div>
  </template>
</template>
