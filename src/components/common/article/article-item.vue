<template>
  <div class="article-item" :style="{ 'background-image': 'url(' + article.picture + ')' }">
    <div v-if="article.tag" class="article-tag">
      <span>{{article.tag}}</span>
    </div>
    <div class="article-meta">
      <h5>{{article.title}}</h5>
      <p v-if="article.description">{{article.description.substring(0, 300)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-item',
  props: ['article'],
  data () {
    return {
    }
  }
}
</script>
<style>
</style>
