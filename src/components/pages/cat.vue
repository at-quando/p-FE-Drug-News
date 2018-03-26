<template>
<div class="cat">
  <article-category></article-category>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-9">
        <article-medium-list></article-medium-list>
        <div class="pagination-section">
          <pagination></pagination>
        </div>
      </div>
      <social-section class="col-md-3"></social-section>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'cat-page',
  data () {
    return {

    }
  }
}
</script>
<style>

</style>
