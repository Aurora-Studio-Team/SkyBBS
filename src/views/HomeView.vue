<script setup></script>

<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in 3" :key="item"> </el-carousel-item>
  </el-carousel>
  <h1>最新内容</h1>
  <el-card style="max-width: 100%">
    <h1>澳门回归25周年</h1>
    <p>热烈庆祝澳门特别行政区回归25周年。</p>
  </el-card>
  <p>ANY MORE...</p>
</template>
<style scoped>
.el-carousel__item:nth-child(1) {
  background: url('/PIC/1.jpg');
  background-size: cover;
}
.el-carousel__item:nth-child(2) {
  background: url('/PIC/2.jpg');
  background-size: cover;
}
.el-carousel__item:nth-child(3) {
  background: url('/PIC/3.png');
  background-size: cover;
}
</style>
