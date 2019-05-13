/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 路由分组
 * @Date: 2019-04-10 11:26:51
 * @LastEditTime: 2019-05-13 14:04:45
 */
import Vue from "vue";
import VueRouter from "vue-router";
import otherRoutes from "./common/index.js";
import pageRouter from "./pages/index.js";
import { getToken, setToken } from "@/util/cookie.js";
// 白名单
const whiteList = ["/login", "/404", "/401", "/lock"];
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history"
});
router.addRoutes([...otherRoutes, ...pageRouter]);
router.beforeEach((to, from, next) => {
  // 仿真登录
  setToken("123");
  const Token = getToken();
  // 判断用户是否登录
  if (Token) {
    next();
  } else {
    to.path != "/about" ? next({ path: "/about" }) : next();
  }
});
export default router;
