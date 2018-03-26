<template>
  <div class="article-medium col-md-12">
    <div class="row">
      <div class="article-medium-bg col-md-5" :style="{ 'background-image': 'url(' + article.picture + ')' }"></div>
      <div class="col-md-7">
        <h5 class="article-medium-title" v-if="article.title">{{article.title}}</h5>
        <p class="article-medium-daytime">{{article.daytime}}</p>
        <p class="article-medium-decs">{{article.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-medium',
  props: ['article'],
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
