<template>
  <section-page title="an uong dinh duong">
    <div slot="content">
      <div class="article-medium-list">
        <article-medium class="article-medium-item" :article="article"></article-medium>
        <article-medium class="article-medium-item" :article="article"></article-medium>
        <article-medium class="article-medium-item" :article="article"></article-medium>
        <article-medium class="article-medium-item" :article="article"></article-medium>
        <article-medium class="article-medium-item" :article="article"></article-medium>
      </div>
    </div>
  </section-page>
</template>

<script>
export default {
  name: 'article-medium-list',
  data () {
    return {
      article: {
        'tag': 'Boone Lawrence',
        'description': 'Aute reprehenderit ea excepteur ad dolore. Deserunt elit ea adipisicing cupidatat laborum commodo pariatur mollit enim exercitation id anim. Exercitation amet minim ea ex. Culpa deserunt pariatur do et et exercitation dolore veniam ad cupidatat culpa exercitation. Cupidatat commodo ex commodo elit. Ad non et id proident consectetur aute consectetur cupidatat. Quis occaecat et do velit occaecat sunt voluptate sint et veniam.\r\n',
        'title': 'Boone Lawrence',
        'picture': 'https://www.w3schools.com/howto/img_fjords.jpg',
        'daytime' : '1/1/2018'
      }
    }
  }
}
</script>
<style>
</style>
