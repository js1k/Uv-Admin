<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 首页
 * @Date: 2019-04-15 16:39:09
 * @LastEditTime: 2019-05-09 17:08:27
 -->
<template>
  <div class="main">
    <div class="main-top">
      <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange"/>
    </div>
    <div class="main-body">
      <section class="main-body-left">菜单</section>
      <section class="main-body-right">主体</section>
    </div>
  </div>
</template>
<script>
import ThemePicker from "@/components/ThemePicker";
export default {
  name: "WelPage",
  components: {
    ThemePicker
  },
  data() {
    return {
      date: Date.parse(new Date()) / 1000,
      time: new Date().valueOf()
    };
  },
  methods: {
    btnClick() {},
    themeChange(val) {
      this.$store.dispatch("changeSetting", {
        key: "theme",
        value: val
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/styles/var.scss";
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  &-top {
    width: 100%;
    height: $top_height;
    line-height: $top_height;
    outline: $ored;
    flex: 0 0 $top_height;
  }
  &-body {
    display: flex;
    flex: 1;
    &-left {
      flex: 0 0 100px;
      background: green;
    }
    &-right {
      flex: 1;
    }
  }
}
</style>
