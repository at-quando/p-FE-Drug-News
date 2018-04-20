<template>
  <section-page title="an uong dinh duong">
    <div slot="content">
      <div class="article-grid">
        <div class="row">
          <div class="col-md-6">
            <article-big :article="article"></article-big>
          </div>
          <div class="col-md-6 nopadding-left article-small-list">
            <article-small class="article-small-item" v-for="article in articles" :key="article.id" :article="article"></article-small>
          </div>
        </div>
      </div>
    </div>
  </section-page>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import * as types from '../../../store/types'
export default {
  name: 'article-grid',
  data () {
    return {
      article: {
        'tag': 'Boone Lawrence',
        'description': 'Aute reprehenderit ea excepteur ad dolore. Deserunt elit ea adipisicing cupidatat laborum commodo pariatur mollit enim exercitation id anim. Exercitation amet minim ea ex. Culpa deserunt pariatur do et et exercitation dolore veniam ad cupidatat culpa exercitation. Cupidatat commodo ex commodo elit. Ad non et id proident consectetur aute consectetur cupidatat. Quis occaecat et do velit occaecat sunt voluptate sint et veniam.\r\n',
        'title': 'Boone Lawrence',
        'picture': 'https://www.w3schools.com/howto/img_fjords.jpg',
        'daytime': '1/1/2018'
      }
    }
  },

  mounted: function() {
    this.showArticles()
  },

  computed: {
    ...mapGetters({
      articles: types.GET_ARTICLE_LIST,
      categories: types.GET_FIRST_ARTICLE
    })
  },

  methods: {
    ...mapActions({
      showArticles: types.SHOW_ARTICLE_LIST
    })
  }
}
</script>
<style>
</style>
