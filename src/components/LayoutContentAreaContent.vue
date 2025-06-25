<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>内容区X坐标</span></div>
    </el-col>
    <el-col :span="19">
      <el-input v-model="xVal" placeholder="请输入内容区X坐标" />
    </el-col>
  </el-row>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>内容区Y坐标</span></div>
    </el-col>
    <el-col :span="19">
      <el-input v-model="yVal" placeholder="请输入内容区Y坐标" />
    </el-col>
  </el-row>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>内容区宽度</span></div>
    </el-col>
    <el-col :span="19">
      <el-input v-model="widthVal" placeholder="请输入内容区宽度" />
    </el-col>
  </el-row>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>内容区高度</span></div>
    </el-col>
    <el-col :span="19">
      <el-input v-model="heightVal" placeholder="请输入内容区高度" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const xVal = ref()
const yVal = ref()
const widthVal = ref()
const heightVal = ref()

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
