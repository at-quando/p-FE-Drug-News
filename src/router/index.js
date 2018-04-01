import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/pages/home.vue'
import Public from '../components/public.vue'
import CatPage from '../components/pages/cat.vue'
import DetailPage from '../components/pages/detail.vue'

import Admin from '../components/admin/admin.vue'
import AdminCategories from '../components/admin/pages/categories/categories.vue'
import AdminCreateArticle from '../components/admin/pages/articles/create-article.vue'
import AdminShowArticle from '../components/admin/pages/articles/show-article.vue'
import AdminListArticles from '../components/admin/pages/articles/list-articles.vue'
import AdminUpdateInfo from '../components/admin/pages/information/update-info.vue'
import AdminUser from '../components/admin/pages/users/users.vue'
import AdminLogin from '../components/admin/auth/login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Public',
      components: {a: Public},
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: HomePage,
          name: 'Home Page'
        }
      ]
    },
    {
      path: '/cat',
      name: 'Public',
      components: {a: Public},
      redirect: '/cat',
      children: [
        {
          path: '/cat',
          component: CatPage,
          name: 'Cat Page'
        }
      ]
    },
    {
      path: '/detail',
      name: 'Public',
      components: {a: Public},
      redirect: '/detail',
      children: [
        {
          path: '/detail',
          component: DetailPage,
          name: 'Cat Page'
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      components: {b: Admin},
      meta: { requiresAuth: true },
      children: [
        {
          path: 'categories',
          component: AdminCategories,
          name: 'Admin Categories'
        },
        {
          path: 'articles',
          component: AdminListArticles,
          name: 'Admin ListArticles'
        },
        {
          path: 'articles/:id',
          component: AdminShowArticle,
          name: 'Admin ShowArticle'
        },
        {
          path: 'articles/new',
          component: AdminCreateArticle,
          name: 'Admin CreateArticle'
        },
        {
          path: 'info',
          component: AdminUpdateInfo,
          name: 'Admin UpdateInfo'
        },
        {
          path: 'users',
          component: AdminUser,
          name: 'Admin User'
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: AdminLogin
    },
    {
      path: '**',
      redirect: '/home'
    }
  ]
})

export default router
