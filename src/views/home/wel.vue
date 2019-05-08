<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 首页
 * @Date: 2019-04-15 16:39:09
 * @LastEditTime: 2019-04-28 10:02:30
 -->
<template>
  <div>
    欢迎来到这里
    {{ date }}
    {{ time }}
    <el-tag>标签一</el-tag>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <theme-picker
      style="float: right;height: 26px;margin: -3px 8px 0 0;"
      @change="themeChange"
    />
    <el-button type="primary" @click="btnClick">主要按钮</el-button>
  </div>
</template>
<script>
import ThemePicker from "@/components/ThemePicker";
import { formDataPage} from "@/util/util.js";
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
    btnClick(){
      let data=[
        {
          id:1
        },
        {
          id:2
        },
        {
          id:3
        },
        {
          id:4
        }
      ]
      
      console.log(formDataPage(1,2,data))
    },
    themeChange(val) {
      this.$store.dispatch("changeSetting", {
        key: "theme",
        value: val
      });
    }
  }
};
</script>
