import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  // actions: {   暂时没用可以注释
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations
  // getters: { state中相当于computed计算属性
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
