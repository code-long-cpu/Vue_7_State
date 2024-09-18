// 此处是vuex的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  // veux中state是单项数据流，防止子组件不通过mutation直接修改state数据，上线时关闭
  strict: true,
  // 通过state可以提供所有组件可用的数据
  state: {
    title: '我是根组件',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
  getters: {
    filterList(state) {
      return state.list.filter(item => item >= 5)
    }
  },
  //通过action操作异步方法，通过调用mutation中的方法，进而改变mutaitons中的值；
  actions: {
    AsyncCount(context, num) {
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000);
    }
  },
  modules: {
    user,
    setting
  }
})
