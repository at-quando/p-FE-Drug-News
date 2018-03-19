<template>
  <div id="app">
    <header-page></header-page>
    <router-view/>
    <footer-page></footer-page>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from './store/types'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      test: types.TEST
    })
  }
}
</script>

<style>

</style>
