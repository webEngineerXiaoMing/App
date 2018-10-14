import Vue from 'vue'
// import App from '../App'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: { // 状态,类似于data
    count: 100,
    list: []
  },
  getters: { // 计算属性 类似于computed
    filterCount (state) {
      return state.count >= 120 ? '120' : state.count
    }
  },
  mutations: { // 唯一改变的途径，同步的（异步的也要把数据提交到这）
    change (state, list) {
      state.list = list
    }
  },
  actions: {
    addAction (context) {
    // 请求接口后拿到值，再提交到mutations的函数里面处理
    //   context.commit('mutations的函数里面', reponse.data)
    //   context.dispath('下一个异步请求'， reponse.data)
    },
    getList ({commit, dispath}) {
      // 请求接口后拿到值，再提交到mutations的函数里面处理
      //   commit('mutations的函数里面', reponse.data)
      //   dispath('下一个异步请求'， reponse.data)
    }
  },
  modules: { // 分割不同模块的代码
    // a: selectModule
  }
})

export default store
