<template>
  <div>
    <div class="table-header">
      <slot name="header" />
    </div>
    <el-table :data="tableData" border>
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
      <el-pagination background v-model:current-page="page.pageNum" v-model:page-size="page.pageSize" :page-sizes="[10, 20, 50, 100]" layout="total, sizes, prev, pager, next, jumper" :total="page.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineEmits, computed } from 'vue'
const prop = defineProps({
  tableConfig: {
    type: Object,
    default: () => ({
      tableData: [],
      tableColumn: [],
      border: true,
      page: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      }
    })
  }
})
const tableData = computed(() => prop.tableConfig.tableData)
const tableColumn = computed(() => prop.tableConfig.tableColumn)
const pageConfig = computed(() => prop.tableConfig.page)
console.log(prop.tableConfig)
const emit = defineEmits(['handleSizeChange', 'handleCurrentChange'])
const page = reactive({
  pageNum: prop.tableConfig.page.pageNum,
  pageSize: prop.tableConfig.page.pageSize,
  total: prop.tableConfig.page.total
})
//methods
const handleSizeChange = val => {
  emit('handleSizeChange', val)
}
const handleCurrentChange = val => {
  emit('handleCurrentChange', val)
}
</script>

<style></style>
