<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 首页
 * @Date: 2019-04-15 16:39:09
 * @LastEditTime: 2019-05-08 15:11:15
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

    <el-button type="primary" @click="btnClick">主要按钮</el-button>
  </div>
</template>
<script>
export default {
  name: 'WelPage',
  data() {
    return {
      date: Date.parse(new Date()) / 1000,
      time: new Date().valueOf(),
    };
  },
  methods: {
    btnClick() {
    },
  },
};
</script>
