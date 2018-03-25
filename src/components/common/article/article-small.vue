<template>
  <div class="article-small col-md-12">
    <div class="row">
      <div class="article-small-bg col-md-5" :style="{ 'background-image': 'url(' + article.picture + ')' }"></div>
      <div class="col-md-7">
        <p>{{article.daytime}}</p>
        <h5 v-if="article.title">{{article.title}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-small',
  props: ['article'],
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
