<template>
  <div class="home-box">
    <div class="row">
      <div class="col-md-7">
        <article-item :article="article"></article-item>
      </div>
      <div class="col-md-5 nopadding-left">
        <div class="nopadding-left nopadding-right medium col-md-12">
          <article-item :article="article"></article-item>
        </div>
        <div class="small row">
          <div class="col-md-6">
            <article-item :article="article"></article-item>
          </div>
          <div class="col-md-6 nopadding-left">
            <article-item :article="article"></article-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'article-home-box',
  data () {
    return {
      article: {
        'tag': 'Boone Lawrence',
        'description': 'Aute reprehenderit ea excepteur ad dolore. Deserunt elit ea adipisicing cupidatat laborum commodo pariatur mollit enim exercitation id anim. Exercitation amet minim ea ex. Culpa deserunt pariatur do et et exercitation dolore veniam ad cupidatat culpa exercitation. Cupidatat commodo ex commodo elit. Ad non et id proident consectetur aute consectetur cupidatat. Quis occaecat et do velit occaecat sunt voluptate sint et veniam.\r\n',
        'title': 'Boone Lawrence',
        'picture': 'https://www.w3schools.com/howto/img_fjords.jpg'
      }
    }
  }
}
</script>
<style>
</style>
