<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 头部
 * @Date: 2019-04-15 14:46:15
 * @LastEditTime: 2019-04-15 17:29:57
 -->
<template>
  <div class="header">
    头部
    <header-time></header-time>
  </div>
</template>
<script>
import HeaderTime from "./time.vue";
export default {
  name: "my-header",
  components: {
    HeaderTime
  }
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 150px;
  outline: 1px solid red;
}
</style>
