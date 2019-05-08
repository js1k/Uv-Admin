/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 复用路由
 * @Date: 2019-04-11 11:06:25
 * @LastEditTime: 2019-04-15 15:00:16
 */
export default [
  {
    path: "*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "Multiplexing" */ "@/components/common-page/404.vue")
  },
  {
    path: "/403",
    name: "403",
    component: () =>
      import(/* webpackChunkName: "Multiplexing" */ "@/components/common-page/403.vue")
  },
  {
    path: "/500",
    name: "500",
    component: () =>
      import(/* webpackChunkName: "Multiplexing" */ "@/components/common-page/500.vue")
  }
];
