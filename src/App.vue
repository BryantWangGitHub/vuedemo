<template>
  <div id="app">
    <el-menu router mode="horizontal" >
      <el-menu-item index="/home">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">DEMO</template>
        <el-menu-item index="/vueresouce">vueresouce</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    <div>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
