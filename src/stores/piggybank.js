import { defineStore } from "pinia";
import { useUserStore } from "@/stores/user.js";

export const usePiggybankStore = defineStore("piggybank", {
  state: () => ({
    currentBank: {
      id: null,
      title: null,
      sum: 0,
      currentSum: 0,
    },
    isBankCreated: false,
  }),
  actions: {
    async createBank(title, sum) {
      const {
        data: {
          piggyBank: { id, piggy_bank_title, goal_sum, current_sum },
        },
      } = await this.axios.post("piggyBank/add", {
        piggyBankTitle: title,
        goalSum: sum,
      }); //<---sashka endpoint

      this.currentBank.id = id;
      this.currentBank.title = piggy_bank_title;
      this.currentBank.sum = goal_sum;
      this.currentBank.currentSum = current_sum;
      this.isBankCreated = true;
      return;
    },
    async getCurrentBank() {
      const {
        data: { id, piggy_bank_title, goal_sum, current_sum },
      } = await this.axios.get("piggyBank/getPiggyBank");
      this.currentBank.id = id;
      this.currentBank.title = piggy_bank_title;
      this.currentBank.sum = goal_sum;
      this.currentBank.currentSum = current_sum;
      this.isBankCreated = true;
    },
    async topUpCurrentBank(amount) {
      const userStore = useUserStore();
      try {
        const {
          data: { PiggyBankCurrentSum, userBalance },
        } = await this.axios.patch("piggyBank/topUpBank", {
          piggyBankId: this.currentBank.id,
          sum: amount.toString(),
        });
        this.currentBank.currentSum = PiggyBankCurrentSum;
        userStore.balance = userBalance;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
