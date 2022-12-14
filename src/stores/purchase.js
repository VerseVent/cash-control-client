import { defineStore } from "pinia";

export const usePurchaseStore = defineStore("purchase", {
  actions: {
    async addPurchase(category) {
      return this.axios.post("category/add", { categoryTitle: category });
    },
    async addPurchaseItem(categoryId,purchaseTitle,purchasePrise) {
      return this.axios.post("purchase/add", { categoryId, purchaseTitle, purchasePrise });
    },
    async getPurchases(categoryId) {
      return this.axios.get("purchase/allPurchases", {
        params: { categoryId },
      });
    },
    async getStats() {
      return this.axios.get("statistic/getPurchaseStatistic");
    },
  },
});
