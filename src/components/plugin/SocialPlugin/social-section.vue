<template>
  <section-page title="Ket noi">
    <div slot="content">
      <div class="circle-icon" v-bind:key="ic.name" v-for="ic in icons" :style="{ 'background-color': ic.color }">
        <font-awesome-icon :icon="[ic.prefix, ic.name]" />
      </div>
    </div>
  </section-page>
</template>

<script>
export default {
  data () {
    return {
      icons: this.$socialicon.icons
    }
  }
}
</script>
<style>
</style>
