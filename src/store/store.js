import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import article from './modules/article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    article
  }
})
