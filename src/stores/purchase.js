import { defineStore } from "pinia";

export const usePurchaseStore = defineStore("purchase", {
  actions: {
    async addPurchase(category) {
      return this.axios.post("category/add", { categoryTitle: category });
    },
    async getPurchases(categoryId) {
      const res = await this.axios.get("purchase/allPurchases", {
        params: { categoryId },
      });
      console.log(res);
    },
  },
});
