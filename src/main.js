import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/routes.js";
import { store } from "./Store";
import "./style.css";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
app.use(store).use(router).use(ElementPlus).mount("#app");

//l'enregistrement global des icones element plus

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
