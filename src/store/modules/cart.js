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
    },

    //修改后台数据
    // 请求方式：patch
    // 请求地址：http://localhost:3000/cart/:id值 表示修改后台参数
    async updateList(context, obj) {
      const res = await axios({
        url: `http://localhost:3000/cart/${obj.id}`,
        method: 'patch',
        data: {
          // id: obj.id,
          count: obj.newCount
        }
      })
      // console.log(res)
      // 重新获取修改后的后台数据
      const newEes = await axios({
        url: "http://localhost:3000/cart",
        method: "get"
      })
      // console.log(res)
      context.commit('updateList', newEes.data)

      // context.commit('updateList', res.data)
    },

  },

  getters: {
    // 计算商品总数 累计count
    total(state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },

    // 计算总价
    totalPrice(state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  },
}
