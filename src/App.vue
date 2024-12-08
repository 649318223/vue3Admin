<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <el-button @click="get">按钮</el-button>
  <el-button @click="signIn">登录</el-button>
  <el-button @click="getToken">token</el-button>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import { login, getUserInfo, token } from './api/login'
import axios from 'axios'

// 方法
const get = async () => {
  const res = await getUserInfo()
  console.log(res)
}
const signIn = async () => {
  const data = {
    userName: 'admin',
    userPwd: '123456'
  }
  const res = await login(data)
  console.log(res)
}
const getToken = async () => {
  const res = await token()
  console.log(res)
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
