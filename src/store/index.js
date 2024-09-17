// 此处是vuex的核心代码
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // veux中state是单项数据流，防止子组件不通过mutation直接修改state数据，上线时关闭
  strict: true,
  // 通过state可以提供所有组件可用的数据
  state: {
    title: '我是根组件',
    count: 100
  },
  getters: {
  },
  // 通过mutations修改state数据
  mutations: {
    addCount(state, n) {
      state.count += n;
    },
    changeTitle(state, name) {
      state.title = name;
    },
    changeCount(state, num) {
      state.count = num;
    },
    subCount(state, n) {
      state.count -= n;
    }
  },
  actions: {
  },
  modules: {
  }
})
