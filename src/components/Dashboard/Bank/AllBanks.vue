<template>
    <div class="container p-0">
        <div>
            <ul class="list-group">
                <li v-for="(item,index) in allBanks" :key="index" class="list-group-item d-flex
                justify-content-between align-items-center">
                <h1>{{item.piggy_bank_title}}</h1>
                <p>{{item.id}}</p>
                <span class="badge bg-primary rounded-pill">{{(item.current_sum+'/'+item.goal_sum)}}</span>
            </li>
        </ul>
    </div>
        </div>
</template>
<script setup>
import { ref } from 'vue';
import { usePiggybankStore } from "@/stores/piggybank.js";
const piggybankStore =  usePiggybankStore(); 
const allBanks = ref([]);
async function getBanks(){
    const {data:{result}} = await piggybankStore.getAllBanks()
    allBanks.value = [...result];
}
getBanks();
</script>