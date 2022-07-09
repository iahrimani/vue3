import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "reset-css";

createApp(App).use(createPinia()).mount("#app");
