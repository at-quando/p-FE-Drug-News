import Pagination from './pagination.vue'

const pagiStore = {
  articlePerPage: 10
}

const PaginationPlugin = {
  install (Vue) {
    Vue.mixin({
      data () {
        return {
          pagiStore: pagiStore
        }
      }
    })
    Object.defineProperty(Vue.prototype, '$pagi', {
      get () {
        return this.$root.socialStore
      }
    })
    Vue.component('pagination', Pagination)
  }
}

export default PaginationPlugin
