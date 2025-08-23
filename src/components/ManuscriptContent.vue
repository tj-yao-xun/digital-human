<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>播报内容</span></div>
    </el-col>
    <el-col :span="19">
      <el-input
        v-model="manuscript"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="请输入播报内容"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
const manuscript = ref('')
</script>

<style scoped>
.el-row{
  width: 100%;
  margin-top: 15px;
}
.labelStyle{
  text-align: right;
}
</style>
