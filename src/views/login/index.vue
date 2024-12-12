<template>
  <div class="login">
    <el-card class="login-card">
      <el-form :model="formData" label-width="auto">
        <el-form-item label="账户">
          <el-input v-model="formData.userName" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.userPwd" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="signIn">登录</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
//API
import { login } from '@/api/login'
//公共参数
const router = useRouter()
const store = useStore()

const formData = reactive({
  userName: 'admin',
  userPwd: '123456'
})
//方法
const signIn = async () => {
  if (!formData.userName || !formData.userPwd) {
    ElMessage.error('请输入用户名或密码')
    return
  }
  const res = await login(formData)
  if (res.status === 200) {
    await store.dispatch('user/getUserInfo')
    router.push({
      path: '/home'
    })
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--el-color-primary);
  .login-card {
    width: 400px;
    height: 300px;
  }
}
</style>
