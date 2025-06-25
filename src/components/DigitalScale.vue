<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>视频比例</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="proportion" placeholder="请选择视频比例">
        <el-option
          v-for="item in proportionOptions"
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
      <div class="proportionTipStyle">
        <span>宽<em>920</em>像素,高度<em>580</em>像素</span>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
const proportion = ref('1')

//数字人视频比例选项
const proportionOptions = [
  {
    value: '1',
    label: '16:9',
  },
  {
    value: '2',
    label: '4:3',
  },
  {
    value: '3',
    label: '9:16',
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
.proportionTipStyle span{
  /*padding-left: 95px;*/
}
.proportionTipStyle span em{
  font-style: normal;
  color: #E6A23C;
  font-weight: 700;
  padding-left: 3px;
  padding-right: 3px;
}
</style>
