import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home page',
    component: HomePage
  }]
})
