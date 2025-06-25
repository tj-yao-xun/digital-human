<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>数字人名称</span></div>
    </el-col>

    <el-col :span="19">
      <el-select v-model="humanName" placeholder="请选择数字人名称">
        <el-option
          v-for="item in humanNameOptions"
          :key="item.id"
          :label="item.label"
          :value="item.id"
        />
      </el-select>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const humanName = ref(1)
//数字人声音选项
const humanNameOptions = [
  {
    id: 1,
    label: '数字人一',
  },
  {
    value: '2',
    label: '数字人二',
  }
]
</script>

<style scoped>
.el-row{
  width: 100%;
  align-items: center;
  margin-top: 15px;
}
.labelStyle{
  text-align: center;
}
</style>
