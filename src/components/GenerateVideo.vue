<template>
  <span>生成视频类型：</span>
  <el-select
    v-model="value"
    placeholder="请选择生成视频类型"
    style="width: 240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script type="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: '1',
    label: '纯数字人',
  },
  {
    value: '2',
    label: '自定义背景数字人',
  },
  {
    value: '3',
    label: '透明数字人',
  },
  {
    value: '4',
    label: '内容播报数字人',
  },
  {
    value: '5',
    label: '纯内容配音',
  }
]
</script>

<style scoped>

</style>
