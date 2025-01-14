<template>
  <div class="home">
    <Upload />
    <el-button type="primary" @click="test">测试服务器接口</el-button>
  </div>
</template>

<script setup>
import { infoApi } from "@/api/testApi";
import { defineAsyncComponent } from "vue";
const Upload = defineAsyncComponent(() => import("@/components/Upload/imgUpload.vue"));

//methods
//测试接口
const test = () => {
  infoApi().then((res) => {
    console.log(res);
  });
};
</script>

<style lang="scss" scoped></style>
