/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 注册指令
 * @Date: 2019-04-25 09:42:48
 * @LastEditTime: 2019-04-25 09:51:59
 */
import directives from "./directives";
const GlobalDirective = Vue => {
  Vue.directive("ClickOutside", directives.ClickOutside);
};
export default GlobalDirective;
