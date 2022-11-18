import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    balance: 0,
  }),
  actions: {
    async sendLoginForm(loginData) {
      return this.axios.post("user/login", loginData);
    },
    async sendSignupForm(signupData) {
      return this.axios.post("user/signup", signupData);
    },
    async checkAuth() {
      return this.axios.post("user/checkAuth");
    },
    async getBalance() {
      const {
        data: { userBalance },
      } = await this.axios.get("piggyBank/getUserBalance");
      this.balance = userBalance;
    },
  },
});
