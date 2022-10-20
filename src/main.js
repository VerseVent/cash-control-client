import { createApp } from "vue";
import axiosInstance from "./plugins/axios"; 
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./index.css";

const app = createApp(App);
const pinia = createPinia();
pinia.use(() => ({ axios: axiosInstance }));

app.use(pinia);
app.use(router);

app.mount("#app");
