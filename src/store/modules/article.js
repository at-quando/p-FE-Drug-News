import * as types from '../types'
import Vue from 'vue'

const state = {
  // token: '',
}
const getters = {
  // [types.TOKEN]: state => {
  //   return state.token
  // },
}

const mutations = {
  // [types.MUTATE_CREATE_USER]: (state, payload) => {
  //   return state
  // },
  // [types.MUTATE_LOG_IN]: (state, payload) => {
  //   // return state = payload.user
  // },
}

const actions = {
  [types.UPLOAD_IMG]: ({commit}, payload) => {
    const formData = new FormData()
    formData.append('file', payload)
    return new Promise((resolve, reject) => {
      Vue.http.post(types.ENDPOINT.upload, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          resolve(response)
        }).catch(function (error) {
          reject(error)
        })
    })
  },
  [types.CREATE_ARTICLE]: ({commit}, payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.post(types.ENDPOINT.createArticle, {article: payload})
        .then(response => {
          resolve(response)
        }, function (error) {
          reject(error)
        })
    })
  },
  [types.SHOW_ARTICLE]: ({commit}, payload) => {
    return new Promise((resolve, reject) => {
      Vue.http.get(`${types.ENDPOINT.createArticle}/${payload}`)
        .then(response => {
          resolve(response)
        }, function (error) {
          reject(error)
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
