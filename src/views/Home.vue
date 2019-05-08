<template>
  <div class="home">
    <el-button type="primary" @click="btnClick">主要按钮</el-button>
    {{ date }}
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "home",
  data() {
    return {
      date: dayjs().format("YYYY-MM-DD HH:mm:ss")
    };
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(() => {
      _this.date = dayjs().format("YYYY-MM-DD HH:mm:ss");
    }, 1000);
  },
  methods: {
    btnClick() {}
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>
