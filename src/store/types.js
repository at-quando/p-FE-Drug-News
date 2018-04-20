// GETTERS
export const YOUR_LOCATION = 'navigator/YOUR_LOCATION'
export const LINK = ''
export const STATUS = 'auth/STATUS'

export const GET_ARTICLE_LIST = 'articleList/GET_ARTICLE_LIST'
export const GET_FIRST_ARTICLE = 'articleList/GET_FIRST_ARTICLE'
export const GET_ARTICLE_BY_ID = 'articleList/GET_ARTICLE_BY_ID'
export const GET_ARTICLE_BY_CATEGORIES = 'articleList/GET_ARTICLE_BY_CATEGORIES'

export const GET_CATELOGIES = 'categories/GET_CATELOGIES'

// MUTATIONS
export const MUTATE_SET_CONNECTION = 'auth/MUTATE_SET_STATUS'
export const MUTATE_SET_CURRENT_USER = 'auth/MUTATE_SET_USER'
export const MUTATE_DELETE_CURRENT_USER = 'auth/MUTATE_DELETE_CURRENT_USER'

export const MUTATE_SET_LIST_ARTICLE = 'article/MUTATE_SET_LIST_ARTICLE'

export const MUTATE_SET_CATEGORIES = 'catelogies/MUTATE_SET_CATEGORIES'

// ACTIONS
export const LOGIN = 'auth/LOGIN'
export const LOGOUT = 'auth/LOGOUT'
export const CHECK_LOGIN = 'auth/CHECK_LOGIN'
export const UPLOAD_IMG = 'article/UPLOAD_IMG'
export const CREATE_ARTICLE = 'article/CREATE_ARTICLE'
export const SHOW_ARTICLE = 'article/SHOW_ARTICLE'

export const SHOW_ARTICLE_LIST = 'article/SHOW_ARTICLE_LIST'

export const SHOW_CATEGORIES = 'categories/SHOW_CATEGORIES'

// ENDPOINT
export const ENDPOINT = {
  'login': 'auth/login',
  'logout': 'auth/logout',
  'checkLogin': 'auth/show',
  'upload': 'images',
  'createArticle': 'articles',
  'getArticle': 'articles',
  'getCatagories': 'categories',
  'getArticleById': 'articles/:id'
}
