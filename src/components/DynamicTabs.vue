<template>
  <el-tabs v-model="editableTabsValue" type="card" editable  class="demo-tabs" @edit="handleTabsEdit">
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      <!-- 动态组件渲染区域 -->
      <dynamic-container :components="item.contentComponents"></dynamic-container>
    </el-tab-pane>
  </el-tabs>

  <digital-scale></digital-scale>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabPaneName } from 'element-plus'

import DynamicContainer from "@/components/DynamicContainer.vue";
import DigitalImage from "@/components/DigitalImage.vue";
import DigitalVoice from "@/components/DigitalVoice.vue";
import DigitalScale from "@/components/DigitalScale.vue";

let tabIndex = 2
const editableTabsValue = ref('1')
const editableTabs = ref([
  {
    title: '数字人一',
    name: '1',
    contentComponents:[
      { component: DigitalImage, props: { msg: 'A 的参数' } },
      { component: DigitalVoice, props: { data: 'B 的数据' } }
    ]
  },
  {
    title: '数字人二',
    name: '2',
    contentComponents:[
      { component: DigitalVoice, props: { data: 'B 的数据' } }
    ]
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
      contentComponents:[
        { component: DigitalImage, props: { msg: 'A 的参数' } },
        { component: DigitalVoice, props: { data: 'B 的数据' } }
      ]
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
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
