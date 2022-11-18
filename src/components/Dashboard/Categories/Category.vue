<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import { usePurchaseStore } from "@/stores/purchase.js";
const purchaseStore = usePurchaseStore();
const route = useRoute();
onMounted(async () => {
  await purchaseStore.getPurchases(route.params.categoryId);
});
</script>
<template>
  <button>Add purchase</button>
  <input
    type="text"
    placeholder=""
  >
  <div>123</div>
</template>
