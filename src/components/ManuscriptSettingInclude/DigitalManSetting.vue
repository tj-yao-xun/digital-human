<template>
  <el-divider class="digitalManTitle">
    <el-icon><star-filled /></el-icon>
    <span>数字人设置</span>
    <el-icon><star-filled /></el-icon>
  </el-divider>

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

  <el-tabs v-model="editableTabsValue" type="card" editable  class="demo-tabs" @edit="handleTabsEdit">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      <!-- 动态组件渲染区域 -->
      <component :is="item.contentComponent"></component>
    </el-tab-pane>
  </el-tabs>

  <div class="positionBox">
    <point-setting-tabs></point-setting-tabs>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
import type { TabPaneName } from 'element-plus'
import DigitalManContent from "@/components/ManuscriptSettingInclude/DigitalManContent.vue";
import PointSettingTabs from "@/components/ManuscriptSettingInclude/PointSettingTabs.vue";

let tabIndex = 2
const editableTabsValue = ref('1')
const openValue = ref(true)


const editableTabs = ref([
  {
    title: '数字人一',
    name: '1',
    contentComponent:DigitalManContent
  },
  {
    title: '数字人二',
    name: '2',
    contentComponent:DigitalManContent
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
      title: '数字人'+upperTabIndex,
      name: newTabName,
      contentComponent:DigitalManContent
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

</script>

<style scoped>
.digitalManTitle{
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.el-row{
  width: 100%;
  align-items: center;
  margin-top: 15px;
}
.labelStyle{
  text-align: center;
}
.positionBox{
  width: 90%;
  margin: 0 auto;
}
</style>
