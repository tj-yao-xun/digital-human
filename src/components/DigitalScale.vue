<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>视频比例</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="proportion" placeholder="请选择视频比例" @change="handleChangeProportionOptions">
        <el-option
          v-for="item in proportionOptions"
          :key="item.id"
          :label="item.value"
          :value="item.id"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8" v-if="heightValue && widthValue">
    <el-col :span="5"></el-col>
    <el-col :span="19">
      <div class="proportionTipStyle">
        <span>宽<em>{{widthValue}}</em>像素,高度<em>{{heightValue}}</em>像素</span>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
import commonConfig from "@/config/common"
const proportion = ref(null)
const widthValue = ref()
const heightValue = ref()

//数字人视频比例选项
const proportionOptions = commonConfig.aspectVideoRatio
//视频比例切换
const handleChangeProportionOptions= (value: string) =>{
  const selectRatio = Array.isArray(proportionOptions) && proportionOptions.find(ratio => ratio.id === value) || null
  widthValue.value = selectRatio?.width
  heightValue.value = selectRatio?.height
}
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
