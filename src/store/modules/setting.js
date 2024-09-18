const state = {
  theme: 'light',
  desc: '测试demo'
}
const mutations = {
  changeTheme(state, newTheme) {
    state.theme = newTheme;
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
}