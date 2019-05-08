<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 路由入口
 * @Date: 2019-04-15 14:52:14
 * @LastEditTime: 2019-04-15 17:29:53
 -->
<template>
  <div>
    <my-header></my-header>
    <router-view />
    <tool-bar></tool-bar>
  </div>
</template>
<script>
import myHeader from './header/header.vue';
import ToolBar from './tool-bar/index.vue';

export default {
  name: 'home',
  components: {
    myHeader,
    ToolBar,
  },
};
</script>
