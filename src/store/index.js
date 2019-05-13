import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import settings from "./modules/settings.js";
import getters from "./getter.js";
import permission from "./modules/permission.js";
// 权限
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    settings,
    permission
  },
  getters
});
export default store;
