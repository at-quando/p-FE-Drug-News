import * as types from '../types'
import Vue from 'vue'

const state = {
  categories: null
}
const getters = {
  [types.GET_CATELOGIES]: state => {
    return state.categories
  }
}

const mutations = {
  [types.MUTATE_SET_CATEGORIES] (state, payload) {
    if(payload) {
      state.categories = payload
    }
    else {
      state.categories = null
    }
  }
}

const actions = {
  [types.SHOW_ARTICLE_LIST]: ({commit}, payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(types.ENDPOINT.getCatagories)
        .then(response => {
          console.log(response.body)
          commit(types.MUTATE_SET_CATEGORIES, response.body)
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
