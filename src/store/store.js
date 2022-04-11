import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  username: '',
  userid: '',

};

const getters = {
  getUserName(state) {
    return state.username;
  }
};

const mutations = {
  setUsername(state, value) {
    state.username=value
  },
  setUserID(state, value) {
    state.userid=value
  }
};
const actions = {
  // getRole({ commit, state }) {
  //   return new Promise(resolve => {
  //     if (state.role.length) {
  //       resolve(state.role);
  //     } else {
  //       getRole().then(res => {
  //         const role = res.data.map(item => {
  //           return { value: item.p_code, label: item.category };
  //         });
  //         commit('setRole', role);
  //         resolve(role);
  //       });
  //     }
  //   });
  // }
};

//vuex实例输出
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
