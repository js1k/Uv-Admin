/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 路由分组
 * @Date: 2019-04-10 11:26:51
 * @LastEditTime: 2019-05-08 15:21:10
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import otherRoutes from './common';
import pageRouter from './pages';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
});
router.addRoutes([...otherRoutes, ...pageRouter]);
export default router;
