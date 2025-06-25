<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>数字人形象</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="graphics" placeholder="请选择数字人形象">
        <el-option
          v-for="item in graphicsOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="5"></el-col>
    <el-col :span="19">
      <div class="basicImgBox">
        <el-image style="width: 100px; height: 100px" :src="imgUrl" fit="fill" />
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
const graphics = ref('1')
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
//数字人形象选项
const graphicsOptions = [
  {
    value: '1',
    label: '形象一',
  },
  {
    value: '2',
    label: '形象2',
  },
  {
    value: '3',
    label: '形象3',
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
