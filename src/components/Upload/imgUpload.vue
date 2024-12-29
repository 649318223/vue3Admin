<template>
  <div class="custom-upload">
    <el-upload
      class="avatar-uploader"
      action="/"
      :show-file-list="false"
      :http-request="uploadFile"
    >
      <img v-if="defaultValue" :src="defaultValue" class="avatar" />
      <el-icon v-else class="avatar-uploader-icon">
        <Plus />
      </el-icon>
    </el-upload>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { uploadApi } from '@/api/public'
const props = defineProps({
  url: {
    type: String,
    default: ''
  }
})
const defaultValue = computed(() => {
  if (props.url) {
    return `http://localhost:3000/${props.url}`
  }
  return ''
})

const emit = defineEmits(['update:url', 'handleChange'])
//method
const uploadFile = files => {
  uploadApi({ file: files.file }).then(res => {
    if (res.status === 200) {
      const data = {
        path: res.data.path
      }
      emit('update:url', data.path)
    }
  })
}
</script>

<style lang="scss" scoped>
.custom-upload {
  .avatar-uploader,
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
    border: 1px dashed var(--el-border-color);
  }
  .el-icon.avatar-uploader-icon {
    font-size: 26px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }
}
</style>
