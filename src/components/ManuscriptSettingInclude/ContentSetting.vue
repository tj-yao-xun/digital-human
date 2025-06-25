<template>
  <el-divider class="digitalManTitle">
    <el-icon><star-filled /></el-icon>
    <span>内容设置</span>
    <el-icon><star-filled /></el-icon>
  </el-divider>
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
  <el-tabs v-model="editableTabsValue" type="card" editable  class="demo-tabs" @edit="handleTabsEdit">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >

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

      <!-- 动态组件渲染区域 -->
      <component :is="item.contentComponent"></component>
    </el-tab-pane>
  </el-tabs>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
import ContentSettingOne from "@/components/ManuscriptSettingInclude/ContentSettingOne.vue";
import ContentSettingTwo  from "@/components/ManuscriptSettingInclude/ContentSettingTwo.vue";

import {TabPaneName} from "element-plus";
const openValue = ref(true)
let tabIndex = 2
const editableTabsValue = ref('1')

const editableTabs = ref([
  {
    title: '内容一',
    name: '1',
    contentComponent:ContentSettingOne
  },
  {
    title: '内容二',
    name: '2',
    contentComponent:ContentSettingTwo
  },
])

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    const upperTabIndex = numberToChinese(tabIndex);
    editableTabs.value.push({
      title: '内容'+upperTabIndex,
      name: newTabName,
      contentComponent:ContentSettingTwo
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }
    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}

// 将对应的阿拉伯数字转换成的大写表示
const numberToChinese = (num) => {
  const chineseMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  if (num < 0 || num > 9) {
    return num.toString(); // 超出0-9范围则返回原数字
  }
  return chineseMap[num];
}

const contentVal = ref()
const contentOptions = [
  {
    value: '1',
    label: '0秒~10秒',
  },
  {
    value: '2',
    label: '10秒~15秒',
  },
  {
    value: '3',
    label: '15秒~30秒',
  }]

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
