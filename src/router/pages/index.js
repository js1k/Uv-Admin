/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 业务路由
 * @Date: 2019-04-11 11:42:56
 * @LastEditTime: 2019-04-15 16:43:51
 */
import Home from "@/views/index.vue";
export default [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "wel",
        redirect: "/wel"
      },
      {
        path: "wel",
        name: "welcome",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/home/wel.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];
