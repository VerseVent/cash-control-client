<script setup>
import { ref } from "vue";
import Bank from "./Bank.vue";
import OtherBanks from "./OtherBanks.vue";

const currentLocation = ref("myBank");
</script>
<template>
  <div>
    <ul class="bank__tabs nav nav-tabs w-100">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="currentLocation === 'myBank' ? 'active' : ''"
          aria-current="page"
          @click="currentLocation = 'myBank'"
        >Your bank</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="currentLocation === 'myBank' ? '' : 'active'"
          aria-current="page"
          @click="currentLocation = 'otherBanks'"
        >Other banks</a>
      </li>
    </ul>
    <Bank v-if="currentLocation === 'myBank'" />
    <OtherBanks v-if="currentLocation === 'otherBanks'" />
  </div>
</template>

<style lang="scss">
.bank__tabs {
  margin-top: 20px;
  --bs-nav-tabs-border-color: rgb(98, 255, 83) !important;
  --bs-nav-tabs-border-width: 4px !important;
}
.nav-tabs .nav-link {
  color: white;
  border: none !important;
  cursor: pointer;
}
</style>
