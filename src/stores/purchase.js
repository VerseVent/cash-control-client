import { defineStore } from "pinia";

export const usePurchaseStore = defineStore("purchase", {
  actions: {
    async addPurchase(category) {
      return this.axios.post("category/add", { categoryTitle: category });
    },
    async addSinglePurchase(categoryId, purchaseTitle, purchasePrise) {
      console.log(categoryId,purchasePrise,purchaseTitle)
      const res = await this.axios.post("purchase/add", {
        categoryId, purchaseTitle, purchasePrise,
      });
      console.log(res);
    },
    async getPurchases(categoryId) {
      return  this.axios.get("purchase/allPurchases", {
        params: { categoryId },
      });
      
    },
  },
});
