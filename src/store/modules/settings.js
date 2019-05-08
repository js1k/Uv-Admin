
const settings = {
  state: {
    theme: 1,
  },
  mutations: {
    // CHANGE_SETTING: (state, { key, value }) => {
    //   if (state.hasOwnProperty(key)) {
    //     state[key] = value;
    //   }
    // },
  },
  actions: {
    changeSetting({ commit }, data) {
      commit('CHANGE_SETTING', data);
    },
  },
};
export default settings;
