let baseUrl = "";
const env = process.env;
if (env.NODE_ENV == "development") {
  baseUrl = `http://180.76.101.155:3000`; //本地
} else if (env.NODE_ENV == "production") {
  baseUrl = ``; //生产环境地址
} else if (env.NODE_ENV == "test") {
  baseUrl = ``; //测试环境地址
}

export { baseUrl, env };
