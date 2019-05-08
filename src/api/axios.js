import axios from "axios";
import config from "./config.js"; // 倒入默认配置
import router from "../router/router";
import { Message } from "element-ui";

export default function fetch(options) {
  return new Promise((reslove, reject) => {
    var service = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
      headers: config.headers,
      withCredentials: config.withCredentials
    });
    // request拦截器
    service.interceptors.request.use(
      config => {
        // let token = localStorage.getItem("access_token");
        // if(token){
        //  config.headers.access_token=`${token}`
        // }
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // response拦截器
    service.interceptors.response.use(
      response => {
        // let token = localStorage.getItem("access_token");
        // let assed_token=response.headers.access_token;
        // if(!token){
        //  localStorage.setItem('access_token',assed_token)
        // }else {
        //  if(assed_token){
        //      localStorage.setItem('access_token',assed_token)
        //  }
        // }
        let data;
        // IE9
        if (response.data == undefined) {
          data = response.request.responseText;
        } else {
          data = response.data;
        }
        switch (data.code) {
          case "110":
            Message({
              message: data.message || "error",
              type: "error",
              duration: 5 * 1000
            });
            break;
          default:
        }
        return data;
      },
      err => {
        if (err.response && err.response.status) {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误";
              break;
            case 401:
              err.message = "未授权，请登录";
              router.push({
                path: "/login"
              });
              break;
            case 403:
              err.message = "拒绝访问";
              router.push({
                path: "/403"
              });
              break;
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`;
              router.push({
                path: "/404"
              });
              break;
            case 408:
              err.message = "请求超时";
              break;
            case 500:
              err.message = "服务器内部错误";

              break;
            case 501:
              err.message = "服务未实现";
              break;
            case 502:
              err.message = "网关错误";
              break;
            case 503:
              err.message = "服务不可用";
              break;
            case 504:
              err.message = "网关超时";
              break;
            case 505:
              err.message = "HTTP版本不受支持";
              break;
            default:
          }
        }
        return Promise.reject(err); //返回错误信息
      }
    );
    service(options)
      .then(res => {
        reslove(res);
        return res;
      })
      .catch(error => {
        reject(error);
      });
  });
}
