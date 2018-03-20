<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">User</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name: 'Admin User'}">
            <el-menu-item index="1-1">List User</el-menu-item>
          </router-link>
          <el-menu-item index="1-2">List Admin</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
           <i class="el-icon-menu"></i>
          <span slot="title">Categories</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name: 'Admin Categories'}">
            <el-menu-item index="2-1">List Categories</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">Article</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name: 'Admin ListArticles'}">
            <el-menu-item index="3-1">List Articles</el-menu-item>
          </router-link>
          <router-link :to="{name: 'Admin CreateArticle'}">
            <el-menu-item index="3-2">Create Articles</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">Information</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name: 'Admin UpdateInfo'}">
            <el-menu-item index="4-1">Update Information</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    background: #607d8b !important;
  }
  .el-menu * {
    color: white !important;
  }
  .el-submenu__title, .el-menu-item {
    &:hover {
      background-color: #616161 !important;
    }
  }
  .el-menu {
    border-right: 0;
  }
</style>
