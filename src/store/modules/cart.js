// 导入axios模块
import axios from 'axios'

// 创建  购物车state模块
export default {
  namespaced: true,
  state() {
    return {
      // 购物车数据
      list: []
    }
  },
  mutations: {
    updateList(state, newList) {
      state.list = newList
    }
  },
  // 发起异步请求
  actions: {
    // 请求方式：get
    // 请求地址：http://localhost:3000/cart
    async getList(context) {
      const res = await axios({
        url: "http://localhost:3000/cart",
        method: "get"
      })
      // console.log(res)
      context.commit('updateList', res.data)
    }

  },
  getters: {

  },
}
