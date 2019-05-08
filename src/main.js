import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "@/store";
import GlobalDirective from "@/directive";
import "@/plugins/element.js";
import "./permission.js";
import "@/styles/common.scss";

GlobalDirective(Vue);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
