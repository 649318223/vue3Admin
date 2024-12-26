<template>
  <div>
    <div class="table-header">
      <slot name="header" />
    </div>
    <el-table :data="tableData" :border="border">
      <template v-for="item in tableColumn" :key="item.prop">
        <el-table-column :prop="item.prop" :label="item.label" :width="item.width">
          <template #default="scope">
            <div v-if="item.type === 'slot'">
              <slot :name="item.slotName" :scope="{ row: scope.row, column: scope.column, $index: scope.$index }"></slot>
            </div>
            <div v-else>
              {{ scope.row[item.prop] }}
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-footer">
      <el-pagination background v-model:current-page="pageConfig.pageNum" v-model:page-size="pageConfig.pageSize" :page-sizes="[10, 20, 50, 100]" layout="total, sizes, prev, pager, next, jumper" :total="pageConfig.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, computed } from 'vue'
const prop = defineProps({
  tableConfig: {
    type: Object,
    default: () => {}
  }
})

//列表配置信息
const { tableConfig } = prop
const tableData = computed(() => tableConfig.tableData || [])
const tableColumn = computed(() => tableConfig.tableColumn || [])
const border = computed(() => (tableConfig.border || tableConfig.border === undefined ? true : false))
const pageConfig = computed(() => tableConfig.page || { pageNum: 1, pageSize: 10, total: 0 })

const emit = defineEmits(['handleSizeChange', 'handleCurrentChange'])
//methods
const handleSizeChange = val => {
  emit('handleSizeChange', val)
}
const handleCurrentChange = val => {
  emit('handleCurrentChange', val)
}
</script>

<style></style>
