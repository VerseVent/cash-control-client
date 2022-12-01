<script setup>
import { usePiggybankStore } from "@/stores/piggybank.js";
import { useUserStore } from "@/stores/user.js";
import { onMounted, ref } from "vue";
import IconPay from "../../icons/IconPay.vue";
import BankForm from "./BankForm.vue";
const piggybankStore = usePiggybankStore();
const amountToPay = ref(0);
const bankProgress = ref("scaleY(0%)");
const userStore = useUserStore();
onMounted(async () => {
  try{

    await piggybankStore.getCurrentBank();
    
    bankProgress.value = `scaleY(${
      (Number(piggybankStore.currentBank.currentSum) * 100) /
      Number(piggybankStore.currentBank.sum)
    }%)`;
  }catch(e){
    console.log("You dont have bank yet")
  }
});
async function closeCurrentBank() {
  try{
    await piggybankStore.deleteCurrentBank();
    await userStore.getBalance();
    piggybankStore.isBankCreated = false;
  }catch(e){
    console.log(e);
  }
}
async function topUpCurrentBank() {
  await piggybankStore.topUpCurrentBank(amountToPay.value);
  const numCurrentSum = Number(piggybankStore.currentBank.currentSum);
  const numSum = Number(piggybankStore.currentBank.sum);

  bankProgress.value = `scaleY(${(numCurrentSum * 100) / numSum}%)`;
}
</script>
<template>
  <div class="bank__bg">
    <div
      v-if="piggybankStore.isBankCreated"
      class="bank__container"
    >
      <h1 class="bank__title text-start">
        Bank: {{ piggybankStore.currentBank.title }}
      </h1>
      <div class="row d-flex justify-around m-0 gx-0">
        <div class="bank__progress col-md-6">
          <h3 class="text-black fs-4">
            Already paid:
            <strong class="text-success">{{ piggybankStore.currentBank.currentSum }}$</strong>
          </h3>
          <h3 class="pt-1">
            Sum to pay: {{ piggybankStore.currentBank.sum }}$
          </h3>
          <div class="progress__container">
            <div
              :style="{ transform: bankProgress }"
              class="progress__bg"
            />
            <img
              class="bank__img"
              src="@/assets/bank.png"
              alt="piggy_bank"
            >
          </div>
        </div>
        <div class="col-md-5 border rounded p-4">
          <h1 class="fs-4 text-black pb-3">
            Send some <strong class="text-success">$$$</strong>
          </h1>
          <div class="row justify-content-around gx-0 py-2">
            <input
              v-model="amountToPay"
              class="form-control col-4 w-50"
              type="number"
              placeholder="Amount of money"
            >
            <button
              class="col-4 btn btn-outline-success rounded"
              @click="topUpCurrentBank"
            >
              <IconPay
                class="mx-auto"
                height="30px"
              />
            </button>
          </div>
          <ul class="mt-3 bank__purchase-list p-4">
            <h1 class="pb-4 fs-5 text-black text-start">
              Last payments
            </h1>
            <li class="bank__purchase-item">
              1
            </li>
            <li class="bank__purchase-item">
              2
            </li>
            <li class="bank__purchase-item">
              3
            </li>
          </ul>
          <div class="text-end pt-3">
            <button @click="closeCurrentBank" class="btn btn-outline-danger">Close bank</button>
          </div>
        </div>
      </div>
      <h3 class="pt-5">
        <span class="text-black fs-5">Bank id: </span>
        {{ piggybankStore.currentBank.id }}
      </h3>
    </div>
    <BankForm v-else />
  </div>
</template>

<style lang="scss">
.bank {
  &__bg {
    padding: 20px;
    background-color: white;
    border-radius: 0 0 15px 15px;
    transition: height cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
  }
  &__container {
    text-align: center;
  }
  &__title {
    font-size: 24px;
    color: black;
    padding: 0px 0 50px 0;
  }
  &__img {
    position: relative;
    // background-color: rgba(135, 255, 87, 0.404);
    // border-radius: 15px;
    z-index: 2;
  }
  &__purchase-list {
    background-color: rgba(135, 255, 87, 0.404);
    border-radius: 15px;
    text-align: left;
  }
  &__progress {
    position: relative;
  }
  &__purchase-item {
    margin-bottom: 10px;
  }
}
.progress__container {
  position: relative;
  overflow: hidden;
}
.progress__bg {
  transform-origin: bottom;
  position: absolute;
  height: 85%;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  width: 90%;
  background-color: rgb(255, 125, 201);
  background-size: cover;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
}
</style>
