<template>
  <el-container class="layout">
    <SideMain />
    <el-container class="main-container">
      <Hearde />
      <AppMain />
    </el-container>
  </el-container>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const SideMain = defineAsyncComponent(() => import('./SideMain.vue'))
const Hearde = defineAsyncComponent(() => import('./Hearde.vue'))
const AppMain = defineAsyncComponent(() => import('./AppMain.vue'))
</script>

<style lang="scss" scoped>
.layout {
  height: 100vh;
  display: flex;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
