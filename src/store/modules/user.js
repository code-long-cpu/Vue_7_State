const state = {
  userInfo: {
    name: 'zhangsan',
    age: 18
  },
  score: 80,
}
const mutations = {
  changeInfo(state, newInfo) {
    state.userInfo = newInfo;
  }
}
const actions = {
  setUserSecond(context, newinfo) {
    setTimeout(() => {
      context.commit('changeInfo', newinfo)
    }, 1000)
  }
}
const getters = {
  upper(state) {
    return state.userInfo.name.toUpperCase();
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}