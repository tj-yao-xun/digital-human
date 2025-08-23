<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>是否添加字幕</span></div>
    </el-col>
    <el-col :span="19">
        <el-radio-group v-model="captionsVal">
          <el-radio label="1" size="large">不添加字幕</el-radio>
          <el-radio label="2" size="large">添加字幕</el-radio>
        </el-radio-group>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>同屏字幕行数</span></div>
    </el-col>
    <el-col :span="19">
        <el-radio-group v-model="linesVal">
        <el-radio label="1" size="large">单行</el-radio>
        <el-radio label="2" size="large">双行</el-radio>
      </el-radio-group>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>字幕颜色</span></div>
    </el-col>
    <el-col :span="19">
      <el-color-picker v-model="color2" />
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
  defineProps({
    title: {
      type: String,
      default: ''
    }
  })

  import {  ref } from 'vue'
  const captionsVal = ref('1')
  const linesVal = ref('1')
  const color2 = ref() //颜色选择器
</script>

<style scoped>
.el-row{
  width: 100%;
  align-items: center;
  margin-top: 15px;
}
.labelStyle{
  text-align: right;
}
</style>
