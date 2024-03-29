// let baseUrl = "./";
module.exports = {
  //   baseUrl: baseUrl,
  //   lintOnSave: true,
  //   devServer: {
  //     publicPath: baseUrl // 和 baseUrl 保持一致
  //   }
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/var.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
