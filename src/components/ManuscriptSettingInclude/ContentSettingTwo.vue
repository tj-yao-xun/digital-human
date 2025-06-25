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
        <div class="labelStyle"><span>开始秒数</span></div>
      </el-col>
      <el-col :span="17">
        <el-input v-model="timeStartSecond" style="" placeholder="请输入开始秒数">
          <template #append>秒</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>结束秒数</span></div>
      </el-col>
      <el-col :span="17">
        <el-input v-model="timeEndSecond" style="" placeholder="请输入结束秒数">
          <template #append>秒</template>
        </el-input>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>是否作为声源</span></div>
      </el-col>
      <el-col :span="17">
        <el-switch
          v-model="voiceVal"
          size="large"
        />
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

    <el-row :gutter="8">
      <el-col :span="7">
        <div class="labelStyle"><span>位置变化方式</span></div>
      </el-col>
      <el-col :span="17">
        <el-select v-model="positionVal" placeholder="请选择位置变化方式">
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
    <!--点位设置-->
    <point-setting-tabs></point-setting-tabs>

  </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";
import PointSettingTabs from "@/components/ManuscriptSettingInclude/PointSettingTabs.vue";

const openValue=ref()
const num = ref(1)
const handleChange = (value: number | undefined) => {
  console.log(value)
}
const timeStartSecond = ref()
const timeEndSecond = ref()
const voiceVal=ref()
const fullScreenValue=ref()
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
const input = ref()
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
