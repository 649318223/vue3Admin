<template>
  <div>
    用户列表
    <TableList :tableData="tableConfig.tableData" :tableColumn="tableConfig.tableColumn">
      <template #header>
        <el-button type="primary" @click="addUser">添加用户</el-button>
      </template>
      <template #address="{ scope }">
        {{ scope.row.address }}
      </template>
    </TableList>
    <AddUser ref="addUserRef" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, reactive } from 'vue'
//components
const TableList = defineAsyncComponent(() => import('@/components/TableList.vue'))
const AddUser = defineAsyncComponent(() => import('./components/addUser.vue'))
//api
import { getListApi } from '@/api/user'
//data
const addUserRef = ref(null)
const tableConfig = reactive({
  tableData: [],
  tableColumn: [
    { label: '用户名', prop: 'userName' },
    { label: '手机号', prop: 'userPhone' },
    { label: '操作', prop: 'address', type: 'slot', slotName: 'address' }
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
const addUser = () => {
  addUserRef.value.openDialog()
}
const showUser = scope => {
  console.log('showUser', scope.row)
}
// 初始化
initData()
// 暴露方法
defineExpose({
  getTableList
})
</script>

<style></style>
