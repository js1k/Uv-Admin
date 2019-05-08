<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 工具栏
 * @Date: 2019-04-15 16:48:28
 * @LastEditTime: 2019-04-23 20:59:30
 -->
<template>
  <div class="tool">
    工具栏
    <div class="tool-main"></div>
  </div>
</template>
<script>
export default {
  name: "tool-bar"
};
</script>

<style lang="scss" scoped>
.tool {
  position: fixed;
  bottom: 200px;
  right: 10px;
  &-main {
    width: 100%;
  }
}
</style>
