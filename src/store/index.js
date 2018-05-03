import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '沈阳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.getItem('city')
  }
} catch (e) {
  console.log(`errorLog: ${e}`)
}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (ctx, city) {
      ctx.commit('mchangeCity', city)
    }
  },
  mutations: {
    mchangeCity (state, city) {
      state.city = city
      try {
        localStorage.setItem('city', city)
      } catch (e) {
        console.log(`errorLog: ${e}`)
      }
    }
  }
})
