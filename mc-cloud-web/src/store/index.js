// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    userInfo: localStorage.getItem('userInfo')
  },
  mutations: {
    setUserToken(state, token) {
      // 缓存令牌 token
      localStorage.setItem("token", token);
      state.token = token;
    },
    setUserInfo(state, info) {
      state.userInfo = JSON.stringify(info);
      localStorage.setItem("userInfo", JSON.stringify(info));
    },
    clearUser(state) {
      state.token = null;
      state.userInfo = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
    }
  },
  actions: {
    login({commit}, token) {
      commit('setUserToken', token);
    },
    logout({ commit }) {
      // 重置状态
      commit('clearUser');
    }
  },
  modules: {},
  getters: {
    isLogin: state => !!state.token,
    token: state => state.token,
    userInfo: state => JSON.parse(state.userInfo)
  }
})
