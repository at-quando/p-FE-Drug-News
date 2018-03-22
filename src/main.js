// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store/store'
import VueI18n from 'vue-i18n'
import i18n from './locales/config'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'flag-icon-css/css/flag-icon.css'
import './assets/style/app/main.scss'
import PluginComponents from './components/plugin/index'
import GlobalComponents from './components/common/index'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import falight from '@fortawesome/fontawesome-free-brands'
import fasolid from '@fortawesome/fontawesome-free-solid'
import filter from './helper/filter'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(PluginComponents)
Vue.use(GlobalComponents)

fontawesome.library.add(falight, fasolid)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)

Vue.http.options.root = process.env.SERVER_IP

Vue.config.productionTip = false

Vue.http.headers.common['Access-Token'] = localStorage.getItem('ACCESS_TOKEN') || null
Vue.http.headers.common['Uid'] = localStorage.getItem('UID') || null

router.beforeEach((to, from, next) => {
  if (to.matched[0].meta.requiresAuth === true) {
    store.dispatch('auth/CHECK_LOGIN').then(response => {
      if (response.body.account && localStorage.getItem('ACCESS_TOKEN')) {
        next()
      } else {
        next({path: '/login'})
      }
    }).catch(function (e) {
      next({path: '/login'})
    })
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  filter,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
})
