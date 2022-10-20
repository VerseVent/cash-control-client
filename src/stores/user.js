import { defineStore } from "pinia";


export const useUserStore = defineStore("user", {
  state: () => ({
    
  }),
  actions: {
    async sendLoginForm(loginData) {
      return this.axios.post("user/login",loginData)
    },
    async sendSignupForm(signupData) {
      return this.axios.post("user/signup",signupData)
    }
  }
  // const doubleCount = computed(() => count.value * 2);
  // async function sendLoginForm() {
    // return axios.post("user/login", )
  // }

  // return { count, doubleCount, increment };
});
