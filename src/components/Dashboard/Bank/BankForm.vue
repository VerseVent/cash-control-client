<template>
  <h1 class="otherbanks__title">
    Create your bank
  </h1>
  <div class="mb-3">
    <label
      for="exampleFormControlInput1"
      class="form-label"
    >Bank goal</label>
    <input
      id="exampleFormControlInput1"
      v-model="bankTitle"
      class="form-control"
      placeholder="Drons for Ukraine"
    >
  </div>
  <div class="mb-3">
    <label
      for="exampleFormControlInput1"
      class="form-label"
    >Bank sum</label>
    <input
      id="exampleFormControlInput2"
      v-model="bankSum"
      class="form-control"
      placeholder="1999$"
    >
  </div>
  <button
    class="btn btn-primary"
    @click="submitBankForm"
  >
    Create
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();
const bankTitle = ref("");
const bankSum = ref(null);

async function submitBankForm() {
  if (bankTitle.value !== "" && bankSum.value !== 0) {
    try {
      await userStore.createBank(bankTitle.value, bankSum.value);
      userStore.isBankCreated = true;
    } catch (e) {
      console.log(e);
      userStore.isBankCreated = false;
    }
  }
}
</script>

<style></style>
