<template>
  <section class="section-page">
    <div class="border-title">
      <h5 class="title-section">{{title}}</h5>
    </div>
    <slot name="content">
    </slot>
  </section>
</template>

<script>
export default {
  name: 'section-page',
  props: ['title']
}
</script>
<style>
</style>
