<template>
  <div class="article-big col-md-12">
    <div class="article-big-bg" :style="{ 'background-image': 'url(' + article.picture + ')' }"></div>
    <div class="article-big-meta">
      <h5>{{article.title}}</h5>
      <p class="daytime">{{article.daytime}}</p>
      <p class="desc" v-if="article.description">{{article.description.substring(0, 300)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-big',
  props: ['article'],
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
