<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 首页
 * @Date: 2019-04-15 16:39:09
 * @LastEditTime: 2019-05-13 15:49:54
 -->
<template>
  <div class="main">
    <div class="main-top">
      头部
      <!-- 主题选择 -->
      <theme-picker
        style="float: right;height: 26px;margin: -3px 8px 0 0;"
        @change="themeChange"
      />
    </div>
    <div class="main-body">
      <section class="main-body-left">
        <left-menus></left-menus>
      </section>
      <section class="main-body-right">
        <div>
          案件
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import ThemePicker from "@/components/ThemePicker";
import LeftMenus from "./components/menus.vue";
// import { getToken, setToken } from "@/util/cookie.js";

export default {
  name: "WelPage",
  components: {
    ThemePicker,
    LeftMenus
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
      flex: 0 0 210px;
      background: green;
    }
    &-right {
      flex: 1;
    }
  }
}
</style>
