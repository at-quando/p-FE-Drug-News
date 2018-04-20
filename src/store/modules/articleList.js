import * as types from '../types'
import Vue from 'vue'

const state = {
  firstArticle: null,
  listArticle: null
}
const getters = {
  [types.GET_FIRST_ARTICLE]: state => {
    return state.listArticle
  },

  [types.GET_ARTICLE_LIST]: state => {
    return state.listArticle
  },

  [types.GET_ARTICLE_BY_ID]: state => {
    return state.listArticle
  },

  [types.GET_ARTICLE_BY_CATEGORIES]: state => {

  }
}

const mutations = {
  [types.MUTATE_SET_LIST_ARTICLE]: (state, payload) => {
    if (payload) {
      state.listArticle = payload
    } else {
      state.listArticle = null
    }
  }
}

const actions = {
  [types.SHOW_ARTICLE_LIST]: ({commit}, payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(types.ENDPOINT.getArticle)
        .then(response => {
          console.log(response.body)
          commit(types.MUTATE_SET_LIST_ARTICLE, response.body)
          resolve(response)
        })
        .catch(function (e) {
          reject(e)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
