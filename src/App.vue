<script setup>
import { RouterView } from 'vue-router'
import Header from './components/pageHeader.vue'
import Sider from './components/pageSider.vue'
import Footer from './components/pageFooter.vue'
</script>

<template>
  <el-alert
    title="警告"
    type="warning"
    description="该网页仍在开发中，部分功能可能无法正常使用。开发者可以在 App.vue 文件中注释掉这个提示。"
    center
    show-icon
  />
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-divider class="line" />
    <el-container class="main">
      <el-aside width="400px">
        <Sider />
      </el-aside>
      <el-container>
        <el-main class="main-content">
          <RouterView />
        </el-main>
        <el-divider class="line1" />
        <el-footer class="footer">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.line {
  margin-top: -1px;
}
.line1 {
  margin-top: -1px;
  width: 120%;
  margin-left: -200px;
}
.main {
  margin-top: -25px;
}
.main-content {
  margin-left: -200px;
  height: calc(100vh - 120px); /* 调整为合适的高度，减去头部和底部的高度 */
  overflow-y: auto; /* 开启垂直滚动 */
}
.footer {
  margin-left: -200px;
  margin-top: -3%;
}
</style>
