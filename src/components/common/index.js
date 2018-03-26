import HeaderPage from './header-page.vue'
import FooterPage from './footer-page.vue'
import ArticleItem from './article/article-item.vue'
import ArticleSmall from './article/article-small.vue'
import ArticleMedium from './article/article-medium.vue'
import ArticleBig from './article/article-big.vue'
import ArticleHomeBox from './article/article-home-box.vue'
import ArticleGrid from './article/article-grid.vue'
import ArticleCategoryBox from './article/article-category-box.vue'
import ArticleMediumList from './article/article-medium-list.vue'
import SectionPage from './section-page.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component('header-page', HeaderPage)
    Vue.component('footer-page', FooterPage)
    Vue.component('article-item', ArticleItem)
    Vue.component('article-small', ArticleSmall)
    Vue.component('article-medium', ArticleMedium)
    Vue.component('article-big', ArticleBig)
    Vue.component('article-home', ArticleHomeBox)
    Vue.component('article-grid', ArticleGrid)
    Vue.component('article-medium-list', ArticleMediumList)
    Vue.component('article-category', ArticleCategoryBox)
    Vue.component('section-page', SectionPage)
  }
}

export default GlobalComponents
