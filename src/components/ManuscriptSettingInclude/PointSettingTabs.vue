<template>
  <el-divider class="digitalManTitle">
    <span>点位设置</span>
  </el-divider>

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
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { StarFilled } from '@element-plus/icons-vue'
import type { TabPaneName } from 'element-plus'
import LayoutDigitalManContent from "@/components/LayoutDigitalManContent.vue";

let tabIndex = 2
const editableTabsValue = ref('1')
const openValue = ref(true)


const editableTabs = ref([
  {
    title: '点位一',
    name: '1',
    contentComponent:LayoutDigitalManContent
  },
  {
    title: '点位二',
    name: '2',
    contentComponent:LayoutDigitalManContent
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
      title: '点位'+upperTabIndex,
      name: newTabName,
      contentComponent:LayoutDigitalManContent
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

</style>
