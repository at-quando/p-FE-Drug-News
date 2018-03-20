<template>
  <el-pagination
    background
    layout="prev, pager, next"
    prev-text='< Trang truoc'
    next-text='Trang sau >'
    :total="100">
  </el-pagination>
</template>

<script>

export default {
  data () {
    return {
      // icons: this.$socialicon.icons
    }
  }
}
</script>
