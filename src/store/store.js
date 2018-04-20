import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import article from './modules/article'
import articleList from './modules/articleList'
import catelogies from './modules/catelogies'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    article,
    articleList,
    catelogies
  }
})
