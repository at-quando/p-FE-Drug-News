<template>
  <div id="show-article">
    <h1>ShowArticle</h1>
    <p>{{article}}</p>
  </div>
</template>
<script>
import * as types from '../../../../store/types'
import { mapActions } from 'vuex'
export default {
  name: 'ShowArticle',
  data () {
    return {
      article: {}
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.showArticle(this.$route.params.id).then( res => {
      this.article = res.body
    })
  },
  methods: {
    ...mapActions({
      showArticle: types.SHOW_ARTICLE
    })
  }
}
</script>
