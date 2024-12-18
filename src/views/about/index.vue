<template>
  <div class="user-info">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div class="user-avatar">
            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt="" />
          </div>
          {{ userInfo.userName }}
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
              <el-upload class="avatar-uploader" action="/" :show-file-list="false" :on-change="handleChange" :before-upload="beforeAvatarUpload">
                <img v-if="form.userAvatar" :src="form.userAvatar" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
              </el-upload>
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
import { Plus } from '@element-plus/icons-vue'
import { reactive, computed } from 'vue'
import { updateApi } from '@/api/user'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
const store = useStore()
const userInfo = computed(() => {
  return store.state.user.userInfo
})
console.log(userInfo)
//data
const form = reactive({
  userName: '',
  desc: '',
  file: '',
  userAvatar: ''
})

//methods
const update = () => {
  // const data = new FormData()
  // for (const key in form) {
  //   data.append(key, form[key])
  // }
  console.log(form)
  updateApi(form).then(res => {
    if (res.status === 200) {
      store.dispatch('user/getUserInfo')
      ElMessage.success('更新成功')
    }
  })
}
const handleChange = file => {
  form.userAvatar = URL.createObjectURL(file.raw)
  form.file = file.raw
}

const beforeAvatarUpload = rawFile => {
  console.log(rawFile)
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  .user-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
  border: 1px dashed var(--el-border-color);
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
