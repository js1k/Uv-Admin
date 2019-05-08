<!--
 * @Author: wangzhongjie
 * @LastEditors: wangzhongjie
 * @Description: 时间
 * @Date: 2019-04-15 16:21:57
 * @LastEditTime: 2019-05-08 15:13:46
 -->
<template>
  <div>
    <p>{{ time }}</p>
    <p>{{ date }}</p>
  </div>
</template>
<script>
import dayjs from 'dayjs';

export default {
  name: 'header-time',
  data() {
    return {
      time: dayjs().format('HH:mm'),
      date: dayjs().format('YYYY/MM/DD'),
    };
  },
  mounted() {
    const that = this;
    this.timer = setInterval(() => {
      that.time = dayjs().format('HH:mm');
      that.date = dayjs().format('YYYY/MM/DD');
    }, 1000);
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
};
</script>
