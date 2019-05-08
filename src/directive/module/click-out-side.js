/*
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 点击自身以外指令
 * @Date: 2019-04-25 09:43:15
 * @LastEditTime: 2019-04-25 10:04:50
 */
export default {
  bind(el, binding) {
    function clickHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      // Node.contains() 返回的是一个布尔值， 来表示传入的节点是否为该节点的后代节点。
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = clickHandler;
    document.addEventListener("click", clickHandler);
  },
  update() {},
  unbind(el) {
    // 解除监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
