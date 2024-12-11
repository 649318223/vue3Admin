<template>
  <div>
    <el-form :model="form" label-width="auto">
      <el-form-item label="名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.desc" />
      </el-form-item>
      <el-form-item label="头像">
        <el-upload class="avatar-uploader" action="/" :show-file-list="false" :on-change="handleChange" :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  desc: '',
  image: ''
})

const imageUrl = ref('')

const handleChange = file => {
  console.log(file)
  const url = URL.createObjectURL(file.raw)
  imageUrl.value = url
}

const beforeAvatarUpload = rawFile => {
  console.log(rawFile)
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
  }
}
</script>

<style lang="scss" scoped>
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
