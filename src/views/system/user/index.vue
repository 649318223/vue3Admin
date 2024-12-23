<template>
  <div>
    用户列表
    <TableList :tableData="tableConfig.tableData" :tableColumn="tableConfig.tableColumn">
      <template #header>
        <el-button type="primary" @click="addUser">添加用户</el-button>
      </template>
      <template #operation="{ scope }">
        <el-button type="primary" @click="editUser(scope)">编辑</el-button>
        <el-button type="danger" @click="deleteUser(scope)">删除</el-button>
      </template>
    </TableList>
    <AddUser ref="addUserRef" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, reactive } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
//components
const TableList = defineAsyncComponent(() => import('@/components/TableList.vue'))
const AddUser = defineAsyncComponent(() => import('./components/addUser.vue'))
//api
import { getListApi, delUserApi } from '@/api/user'
//data
const addUserRef = ref(null)
const tableConfig = reactive({
  tableData: [],
  tableColumn: [
    { label: '用户名', prop: 'userName' },
    { label: '手机号', prop: 'userPhone' },
    { label: '操作', prop: 'address', type: 'slot', slotName: 'operation' }
  ]
})

//methods
const initData = () => {
  getTableList()
}
const getTableList = async () => {
  const res = await getListApi()
  if (res.status === 200) {
    tableConfig.tableData = res.data
  }
}
// 添加用户
const addUser = () => {
  addUserRef.value.openDialog('add')
}
// 编辑用户
const editUser = scope => {
  addUserRef.value.openDialog('edit', scope.row)
}
// 删除用户
const deleteUser = scope => {
  ElMessageBox.confirm('确认删除该用户吗?', 'Warning', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      const { _id } = scope.row
      delUserApi({ id: _id }).then(res => {
        if (res.status === 200) {
          getTableList()
          ElMessage({ type: 'success', message: '删除成功' })
        }
      })
    })
    .catch(() => {
      ElMessage({ type: 'info', message: '取消删除' })
    })
}
// 初始化
initData()
// 暴露方法
defineExpose({
  getTableList
})
</script>

<style></style>
