<template>
  <div>
    <el-dialog v-model="vsible" :title="title" @close="closeDialog" width="500px" center>
      <el-form ref="formRef" :model="formData" label-width="120px">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="formData.userName" />
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input v-model="formData.userPwd" />
        </el-form-item>
        <el-form-item label="手机号" prop="userPhone">
          <el-input v-model="formData.userPhone" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeDialog">取消</el-button>
          <el-button type="primary" @click="confirm($parent)">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { computed, reactive, ref, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { addUserApi } from '@/api/user'
const formRef = ref(null)
//data
const vsible = ref(false)
const dialogType = ref('')
const formData = reactive({
  userName: '',
  userPwd: '',
  userPhone: '',
  userSex: '',
  userAge: '',
  userAddress: '',
  userAvatar: '',
  userStatus: '',
  userCreateTime: '',
  userUpdateTime: '',
  desc: ''
})
//computed
const title = computed(() => {
  return dialogType.value === 'add' ? '添加用户' : '编辑用户'
})
//methods
const confirm = parent => {
  if (dialogType.value === 'add') {
    addUser(parent)
  } else {
    editUser()
  }
}
const addUser = parent => {
  addUserApi(formData).then(res => {
    if (res.status === 200) {
      ElMessage.success(res.message)
      parent.$parent.getTableList()
      closeDialog()
    }
  })
}
const editUser = () => {
  addUserApi(formData).then(res => {
    if (res.status === 200) {
      ElMessage.success(res.message)
      parent.$parent.getTableList()
      closeDialog()
    }
  })
}
const openDialog = (type, data) => {
  dialogType.value = type
  vsible.value = true
  nextTick(() => {
    formRef.value.resetFields()
    if (type === 'edit') {
      formData.userName = data.userName
      formData.userPhone = data.userPhone
      formData.desc = data.desc
    }
  })
}
const closeDialog = () => {
  formRef.value.resetFields()
  vsible.value = false
}

defineExpose({
  openDialog
})
</script>

<style></style>
