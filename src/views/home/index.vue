<template>
  <div class="home">
    <el-upload class="avatar-uploader" action="/" :show-file-list="false" :http-request="handleChange">
      <img v-if="form.userAvatar" :src="form.userAvatar" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { uploadApi } from '@/api/public'
const form = reactive({
  userAvatar: ''
})
const handleChange = files => {
  console.log(files)
  uploadApi({ file: files.file }).then(res => {
    console.log(res)
  })
}
</script>

<style lang="scss" scoped>
.home {
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
.avatar-uploader,
.avatar {
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
