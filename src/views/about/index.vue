<template>
  <div class="user-info">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div class="user-avatar">
            <img :src="userAvatar" alt="" />
          </div>
          <div class="user-name">{{ userInfo.userName }} 欢迎登录！！！</div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <el-form :model="form" label-width="auto">
            <el-form-item label="名称">
              <el-input v-model="form.userName" />
            </el-form-item>
            <el-form-item label="描述">
              <el-input v-model="form.desc" />
            </el-form-item>
            <el-form-item label="头像">
              <Upload v-model:url="form.userAvatar" />
            </el-form-item>
            <el-form-item>
              <el-button @click="update" type="primary">更新</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, computed, defineAsyncComponent } from 'vue'
import { updataUserApi } from '@/api/user'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
const Upload = defineAsyncComponent(() => import('@/components/Upload/imgUpload.vue'))
const store = useStore()
//computed
const userAvatar = computed(() => {
  if (userInfo.value.userAvatar) {
    return `http://localhost:3000/${userInfo.value.userAvatar}`
  }
  return 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
})
const userInfo = computed(() => {
  return store.state.user.userInfo
})

//data
const form = reactive({
  userName: userInfo.value.userName || '',
  desc: userInfo.value.desc || '',
  userAvatar: userInfo.value.userAvatar || ''
})

//methods
const update = () => {
  const data = {
    ...form,
    id: userInfo.value._id
  }
  updataUserApi(data).then(res => {
    if (res.status === 200) {
      store.dispatch('user/getUserInfo')
      ElMessage.success('更新成功')
    }
  })
}
</script>

<style lang="scss" scoped>
.user-info {
  .user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
