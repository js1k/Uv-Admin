/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 路由分组
 * @Date: 2019-04-10 11:26:51
 * @LastEditTime: 2019-05-13 16:03:25
 */
import Vue from "vue";
import VueRouter from "vue-router";
import otherRoutes from "@/router/common/index.js";
import pageRouter from "@/router/pages/index.js";
import { getToken, setToken } from "@/util/cookie.js";
import store from "@/store/index.js";

// 白名单
// const whiteList = ["/login", "/404", "/401", "/lock"];
Vue.use(VueRouter);
let router = new VueRouter({
  mode: "history"
});
router.addRoutes([...otherRoutes]);
// router.addRoutes([...pageRouter]);
router.beforeEach(async (to, from, next) => {
  // 仿真登录
  if (to.path == "/wel") {
    setToken("123");
  }
  const Token = getToken();
  // 判断用户是否登录
  console.log("huoqu是否登录", Token);
  if (Token) {
    console.log("已经登录");
    const accessRoutes = await store.dispatch("generateRoutes");
    console.log("新的路由", accessRoutes);
    router.addRoutes(accessRoutes);
    next();
  } else {
    to.path != "/about" ? next({ path: "/about" }) : next();
  }
});
export default router;
