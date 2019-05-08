/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 路由分组
 * @Date: 2019-04-10 11:26:51
 * @LastEditTime: 2019-04-25 15:09:51
 */
import Vue from "vue";
import VueRouter from "vue-router";
import otherRoutes from "./common/index.js";
import pageRouter from "./pages/index.js";
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history"
});
router.addRoutes([...otherRoutes, ...pageRouter]);
export default router;
