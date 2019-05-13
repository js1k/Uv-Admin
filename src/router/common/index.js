/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 复用路由
 * @Date: 2019-04-11 11:06:25
 * @LastEditTime: 2019-05-13 11:32:33
 */
export default [
  {
    path: "*",
    name: "404",
    hidden: true,
    component: () =>
      import(/* webpackChunkName: "Multiplexing" */ "@/components/common-page/404.vue")
  },
  {
    path: "/403",
    name: "403",
    hidden: true,
    component: () =>
      import(/* webpackChunkName: "Multiplexing" */ "@/components/common-page/403.vue")
  },
  {
    path: "/500",
    name: "500",
    hidden: true,
    component: () =>
      import(/* webpackChunkName: "Multiplexing" */ "@/components/common-page/500.vue")
  }
];
