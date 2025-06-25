<template>
<div class="contentSettingOne">
  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>内容是否显示</span></div>
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
      <div class="labelStyle"><span>内容优先级</span></div>
    </el-col>
    <el-col :span="17">
      <el-input-number v-model="num" :min="1" :max="99" @change="handleChange" />
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>内容选择</span></div>
    </el-col>
    <el-col :span="17">
      <el-select v-model="contentVal" placeholder="请选择内容">
        <el-option
          v-for="item in contentOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7"></el-col>
    <el-col :span="17">
      <el-image fit="fill" style="height: 100px"
                :src="url">
      </el-image>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>开始播报时间</span></div>
    </el-col>
    <el-col :span="17">
      <el-select v-model="broadcastTime" placeholder="请选择内容">
        <el-option
          v-for="item in broadcastOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>先于播报开始时间</span></div>
    </el-col>
    <el-col :span="17">
      <el-input v-model="timeSecond" style="" placeholder="请输入时间">
        <template #append>秒</template>
      </el-input>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>内容结束方式</span></div>
    </el-col>
    <el-col :span="17">
      <el-select v-model="endWayVal" placeholder="请选择内容结束方式">
        <el-option
          v-for="item in endWayOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>后于播报开始时间</span></div>
    </el-col>
    <el-col :span="17">
      <el-input v-model="timeSecond" style="" placeholder="请输入时间">
        <template #append>秒</template>
      </el-input>
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>内容是否全屏</span></div>
    </el-col>
    <el-col :span="17">
      <el-switch
        v-model="fullScreenValue"
        size="large"
      />
    </el-col>
  </el-row>

  <el-row :gutter="8">
    <el-col :span="7">
      <div class="labelStyle"><span>内容位置是否变化</span></div>
    </el-col>
    <el-col :span="17">
      <el-switch
        v-model="fullScreenValue"
        size="large"
      />
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

const contentVal = ref()
const contentOptions = [
  {
    value: '1',
    label: '第一页',
  },
  {
    value: '2',
    label: '第二页',
  },
  {
    value: '3',
    label: '第三页',
  }]
const url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg')
const broadcastTime = ref()
const broadcastOptions = [
  {
    value: '1',
    label: '与播报文稿同步',
  },
  {
    value: '2',
    label: '先于播报文稿',
  },
  {
    value: '3',
    label: '后于播报文稿',
  }]
const timeSecond = ref()
const endWayVal = ref()
const endWayOptions =  [
  {
    value: '1',
    label: '与播报文稿同步',
  },
  {
    value: '2',
    label: '先于播报文稿',
  },
  {
    value: '3',
    label: '后于播报文稿',
  }]
const fullScreenValue = ref()

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
