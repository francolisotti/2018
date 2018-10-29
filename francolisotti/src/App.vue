<template>
  <div id="app">
    <el-menu mode="horizontal">
      <el-menu-item index>
        <router-link to="/">Lista de usuarios</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/form">Agregar usuario</router-link>
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {};
    }
  };
</script>
<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>