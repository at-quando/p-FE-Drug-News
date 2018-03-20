<template>
  <el-row>
    <el-col :span="4" class="col-sidebar">
      <side-bar></side-bar>
    </el-col>
    <el-col :span="20">
      <div class="container">
        <router-view/>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import SideBar from './common/side-bar.vue'

export default {
  name: 'Admin',
  components: {
    SideBar
  }
}
</script>
<style>
.col-sidebar {
  background: #607d8b !important;
  height: 100vh;
}
</style>
