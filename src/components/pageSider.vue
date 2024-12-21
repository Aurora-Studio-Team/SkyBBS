<template>
  <el-col :span="12">
    <el-menu default-active="1" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <span><router-link to="/">主页</router-link></span>
      </el-menu-item>
      <el-menu-item index="2">
        <span><router-link to="/hot">热门</router-link></span>
      </el-menu-item>
      <el-menu-item index="3">
        <span><router-link to="/topic">话题</router-link></span>
      </el-menu-item>
      <el-menu-item index="4">
        <span><router-link to="/classification">分类</router-link></span>
      </el-menu-item>
      <el-menu-item index="5">
        <span><router-link to="/settings">设置</router-link></span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<script lang="js" setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}

const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.button-menu {
  margin-top: auto;
  margin-bottom: auto;
}
a {
  text-decoration: none;
  color: black;
}
</style>
