<template>
  <div>
    <div class="table-header">
      <slot name="header" />
    </div>
    <el-table :data="tableData">
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
  </div>
</template>

<script setup>
const prop = defineProps({
  tableData: {
    type: Array,
    default: () => []
  },
  tableColumn: {
    type: Array,
    default: () => []
  }
})
</script>

<style></style>
