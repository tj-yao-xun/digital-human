<template>
  <div class="digitalContent">
    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>数字人是否显示</span></div>
      </el-col>
      <el-col :span="17">
        <el-switch
          v-model="openValue"
          size="large"
        />
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>数字人优先级</span></div>
      </el-col>
      <el-col :span="17">
        <el-input-number v-model="num" :min="1" :max="99" @change="handleChange" />
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>数字人位置变化</span></div>
      </el-col>
      <el-col :span="17">
        <el-radio-group v-model="positionVal">
          <el-radio value="Value 1">不变</el-radio>
          <el-radio label="Label 2 & Value 2">变化</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>位置变化方式</span></div>
      </el-col>
      <el-col :span="17">
        <el-select v-model="positionVal" placeholder="请选择位置变化方式" style="width: 240px">
          <el-option
            v-for="item in positionOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>变换时间(秒)</span></div>
      </el-col>
      <el-col :span="17">
        <el-input v-model="input" style="width: 240px" placeholder="请输入变换时间(秒)" />
      </el-col>
    </el-row>


  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const openValue = ref()

const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}
//位置
const positionVal  = ref()
//位置变换方式
const positionOptions= ref([
  {
    value: '1',
    label: '直接变换',
  },
  {
    value: '2',
    label: '平滑移动',
  },
  {
    value: '3',
    label: '点位顺序变换',
  },
  {
    value: '4',
    label: '点位顺序移动',
  }])


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
