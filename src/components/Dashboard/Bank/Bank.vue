<template>
  <div class="bank__bg">
    <div
      v-if="userStore.isBankCreated"
      class="bank__container"
    >
      <h1 class="bank__title">
        Your current bank: {{}}
      </h1>
      <div class="row d-flex justify-around m-0 gx-0">
        <div class="bank__progress col-md-6">
          <div class="progress__bg" />
          <img
            class="bank__img"
            src="@/assets/bank.png"
            alt="piggy_bank"
          >
        </div>
        <ul class="col-md-5 bank__purchase-list p-4">
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
      </div>
    </div>
    <BankForm v-else />
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user.js";
import BankForm from "./BankForm.vue";
const userStore = useUserStore();
</script>

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
    padding: 50px 0 50px 0;
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
.progress__bg {
  transform-origin: bottom;
  position: absolute;
  height: 200px;
  bottom: 10px;
  left: 10px;
  z-index: 1;
  width: 90%;
  transform: scaleY(150%);
  background-color: rgb(255, 125, 201);
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;
}
</style>
