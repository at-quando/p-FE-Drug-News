<template>
  <div id="app">
    <header-page></header-page>
    <div class="container">
      <router-view/>
    </div>
    <footer-page></footer-page>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import * as types from '../store/types'

export default {
  name: 'Public',
  methods: {
    ...mapActions({
      test: types.TEST
    })
  }
}
</script>
<style>

</style>
