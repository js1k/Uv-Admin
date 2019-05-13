const user = {
  state: {
    uaserName: "",
    roles: false
  },
  actions: {
    // 获取用户权限
    getInfo() {
      let data = [
        {
          id: 1,
          name: "wel"
        },
        {
          id: 2,
          name: "about"
        }
      ];
      return data;
    }
  },
  mutations: {}
};
export default user;
