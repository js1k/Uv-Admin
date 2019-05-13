/*
 * @Author: wangzhongjie
 * @Date: 2019-05-13 11:07:50
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2019-05-13 14:53:22
 * @Description: 权限管理
 */
import otherRoutes from "@/router/common/index.js";
import pageRouter from "@/router/pages/index.js";
const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    //设置路由
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      // 合并必须有的路由
      // state.routes = constantRoutes.concat(routes);
    }
  },
  actions: {
    generateRoutes({ commit }) {
      return new Promise(resolve => {
        // let accessedRoutes;
        // if (roles.includes("admin")) {
        //   accessedRoutes = asyncRoutes || [];
        // } else {
        //   accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        // }
        commit("SET_ROUTES", pageRouter);
        resolve(pageRouter);
      });
    }
  }
};
export default permission;
