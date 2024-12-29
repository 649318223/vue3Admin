<template>
  <div class="home">
    <Upload @change="handleChange" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const Upload = defineAsyncComponent(() => import('@/components/Upload/imgUpload.vue'))
//methods
</script>

<style lang="scss" scoped></style>
