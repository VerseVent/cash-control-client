import { defineStore } from "pinia";


export const useUserStore = defineStore("user", {
  state: () => ({
    userCurrentBank: {
      id:null,
      title: null,
      sum: null,
      currentSum:null,
    },
    isBankCreated:false,
  }),
  actions: {
    async sendLoginForm(loginData) {
      return this.axios.post("user/login",loginData)
    },
    async sendSignupForm(signupData) {
      return this.axios.post("user/signup",signupData)
    },
    async checkAuth() {
      return this.axios.post("user/checkAuth");
    },
    async createBank(title, sum) {
      const { data: { piggyBank: { id, piggy_bank_title, goal_sum, current_sum } } } = await this.axios.post("piggyBank/add",
        { piggyBankTitle: title, goalSum: sum });//<---sashka endpoint
      
      this.userCurrentBank.id = id;
      this.userCurrentBank.title = piggy_bank_title;
      this.userCurrentBank.sum = goal_sum;
      this.userCurrentBank.currentSum = current_sum;
      return;
    }
  }
});
