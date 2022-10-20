<template>
  <main class="main__container row gx-0">
    <SidebarActions class="col-4" />
    <div class="container-fluid col-6 d-flex justify-center">
      <div class="bg" />
      <router-view class="router__view" />
    </div>
  </main>
</template>

<script setup>
import SidebarActions from "../components/Dashboard/SidebarActions.vue";
</script>

<style>
.bg {
  position: absolute;
  z-index: -1;
  background-image: url("https://freepngimg.com/download/money/5-2-money-png-picture.png");
  filter: opacity(55%);
  width: 100vw;
  height: 100%;
}
.main__container {
  position: relative;
  overflow: hidden;
}
</style>
