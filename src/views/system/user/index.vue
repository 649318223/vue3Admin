<template>
  <div>
    用户列表
    <el-button type="primary" @click="addUser">添加用户</el-button>
    <AddUser ref="addUserRef" />
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import AddUser from './components/addUser.vue'
const addUserRef = ref(null)

//methods
const addUser = () => {
  addUserRef.value.openDialog()
}
</script>

<style></style>
