<template>
  <div class="article-small col-md-12">
    <div class="row">
      <div class="article-small-bg col-md-5" :style="{ 'background-image': 'url(' + picture.picture + ')' }"></div>
      <div class="col-md-7">
        <p>{{article.created_at.substr(0,10) }}</p>
        <h5 v-if="article.title">{{article.title}}</h5>
        <!-- <p v-html="article.content"></p> -->
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
      picture: {
        'picture': 'https://www.w3schools.com/howto/img_fjords.jpg',
      }
    }
  }
}
</script>
<style>
</style>
