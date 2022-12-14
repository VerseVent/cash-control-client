<script setup>
import { usePurchaseStore } from "@/stores/purchase.js";
import { ref } from "vue";
import BarChart from "./BarChart.vue"
const store = usePurchaseStore();
const chartData = ref({
  labels: ["defautl1","default2"],
  datasets: [
    {
      label: "My spendings",
      data: [50,50],
      backgroundColor: "#731dd8",
      borderColor: "#731dc8",
      borderWidth: 1,
      borderRadius: 5,
      hoverBorderWidth: 0,
      hoverBackgroundColor: "#9F54F3",
    },
  ],
});
const currentChartHeight = ref({
  height: "450px",
  position: "relative",
});
async function getStatistics(){
  const {data:{result}} = await store.getStats(); 
  console.log(result)
  console.log('test', chartData.value)
  chartData.value.labels = [ ...result.categories ];
  chartData.value.datasets[0].data = [...result.sums];

}
getStatistics();
</script>
<template>
  <div class="container p-4 rounded bg-white chart__container mt-5">
    <h1 class="p-2 text-black fs-4">
      Stats
    </h1>
    <BarChart
      :chart-id="'#spendings'"
      :css-classes="'p-2 text-black'"
      :chart-data="chartData"
      :styles="currentChartHeight"
    />
  </div>
</template>


<style>
.chart__container{
  max-height: 550px !important;
}
</style>
