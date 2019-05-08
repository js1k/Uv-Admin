import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import settings from "./modules/settings.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    settings
  }
});
export default store;
