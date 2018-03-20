import HeaderPage from './header-page.vue'
import FooterPage from './footer-page.vue'
import ArticleItem from './article/article-item.vue'
import ArticleHomeBox from './article/article-home-box.vue'
import ArticleCategoryBox from './article/article-category-box.vue'
import SectionPage from './section-page.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('header-page', HeaderPage)
    Vue.component('footer-page', FooterPage)
    Vue.component('article-item', ArticleItem)
    Vue.component('article-home', ArticleHomeBox)
    Vue.component('article-category', ArticleCategoryBox)
    Vue.component('section-page', SectionPage)
  }
}

export default GlobalComponents
