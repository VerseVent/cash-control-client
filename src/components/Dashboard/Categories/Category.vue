<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import { usePurchaseStore } from "@/stores/purchase.js";
const purchaseStore = usePurchaseStore();
const route = useRoute();
const purchaseTitle = ref('');
const purchasePrice = ref(0);
const purchasesSum = ref(0);
const allPurchases = ref([]);
onMounted(async () => {
  const  {data}= await purchaseStore.getPurchases(route.params.categoryId);
  allPurchases.value = [...data.result.purchases];

  console.log(allPurchases.value)
});
async function addPurchase(){
  if(purchaseTitle.value.length>=1 && purchasePrice.value>0){
    try{
      const lastAdded = await purchaseStore.addSinglePurchase(route.params.categoryId, purchaseTitle.value,purchasePrice.value);
      console.log(lastAdded.data.purchases);
      allPurchases.value = [...lastAdded.data.purchases ];
    }catch(e){
      console.log(e);
    }
  }
}
const countSum = computed(()=>{
  return allPurchases.value.reduce((accum, purchase)=>{
    return accum + Number(purchase.purchasePrice);
  },purchasesSum.value)

});
</script>
<template>
  <div class="col-md-10 col-lg-6 col-xl-7 bg-white p-4 rounded mt-4 mx-auto">
      <h1 class="category__title">
        Add purchase
      </h1>

      <form
        class="category__form"
        @submit.prevent="emitAddCategory"
      >
        <label class="text-start mt-4 mx-1"> Purchase title: </label>
        <input
          id="category-text"
          class="category__input"
          v-model="purchaseTitle"
          type="text"
        >
        <label class="text-start mt-4 mx-1"> Price: </label>
        <input
          id="category-text"
          class="category__input"
          v-model="purchasePrice"
          type="number"
        >
        <button @click="addPurchase" class="category__btn">
          Add new purchase
        </button>
        <h2 class="app__title">
          © Cash Control
        </h2>
      </form>
      <div>
        <h1 class="text-center p-3 fs-4 text-black">Your last purchases</h1>
        <ul class="list-group">
  <li v-for="(item,index) in allPurchases" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
     {{item.purchaseTitle}}
    <span class="badge bg-primary rounded-pill">{{item.purchasePrice}}</span>
  </li>
  </ul>
  <span class="badge bg-primary rounded-pill mt-3 p-2">Sum: {{countSum}}</span>

      </div>
    </div>
</template>
