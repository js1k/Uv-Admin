<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 路由入口
 * @Date: 2019-04-15 14:52:14
 * @LastEditTime: 2019-05-09 15:57:41
 -->
<template>
  <div class="view">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.view {
  height: 100%;
}
</style>
