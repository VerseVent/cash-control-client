import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
  actions: {
    async addCategory(category) {
      return this.axios.post("category/add", { categoryTitle: category });
    },
    async getCategories() {
      return this.axios.get("category/allCategories");
    }
  }
});
