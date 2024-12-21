<template>
  <div class="container">
    <img src="/logo.png" alt="Logo" height="55px" class="logo" />
    <h3>SkyBBS</h3>
    <el-input v-model="input" class="input" placeholder="搜索" />
  </div>
  <el-dropdown class="dropdown">
    <span class="el-dropdown-link">
      <el-avatar style="margin-right: 10px" :icon="UserFilled" />
      用户名<!--这里要使用方法获取用户名-->
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item><router-link to="/account">用户中心</router-link></el-dropdown-item>
        <el-dropdown-item
          ><p color="red">退出登录</p>
          <!--这里要实现退出登录功能--></el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const input = ref('')
</script>

<style scoped>
.container {
  height: 60px;
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
  width: 70%;
  float: left;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
}
.dropdown {
  width: 30%px;
  float: right;
  margin: 9px;
}
.logo {
  margin-right: 10px; /* 控件之间的间距 */
}

.input {
  margin-left: 60px;
  height: 45px;
  width: 450px;
  margin-top: 3px;
  margin-bottom: 3px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
