<script setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
);

const props = defineProps({
  chartId: {
    type: String,
    default: "bar-chart",
  },
  datasetIdKey: {
    type: String,
    default: "label",
  },
  width: {
    type: Number,
    default: 400,
  },
  cssClasses: {
    default: "",
    type: String,
  },
  styles: {
    type: Object,
    default: () => {},
  },
  plugins: {
    type: Array,
    default: () => [],
  },
  chartData: {
    type: Object,
    default: () => ({
  labels: ["defautl1","default2"],
  datasets: [
    {
      label: "My spendings",
      data: [50,50],
      backgroundColor: "rgba(102, 255, 0, 0.301)",
      borderColor: "rgba(102, 255, 0, 1)",
      borderWidth: 1,
      borderRadius: 5,
      hoverBorderWidth: 0,
      hoverBackgroundColor: "#fff",
    },
  ],
}),
  },
  chartOptions: {
    type: Object,
    default: () => ({
      responsive: true,
      maintainAspectRatio: false,
    }),
  },
});
</script>
<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="'candidateResults'"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
  />
</template>
