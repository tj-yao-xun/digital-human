<template>
  <el-tabs v-model="editableTabsValue" type="card" editable  class="demoDigitalTabs" @edit="handleTabsEdit">
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
</template>

<script lang="ts" setup>
import { ref,watch,shallowRef } from 'vue'
import type { TabPaneName } from 'element-plus'

import DynamicContainer from "@/components/DynamicContainer.vue";
import DigitalImage from "@/components/DigitalImage.vue";
import DigitalVoice from "@/components/DigitalVoice.vue";
import BackImgSetting from "@/components/BackImgSetting.vue";


const props = defineProps({
  DigitalKey:{type:String,default:''},
  title:{type:String,default:''}
})

const tabConfigSetting = {
  //透明数字人
  TransparentDigitalHuman:[
    { component: DigitalImage, props: { data: 'B 的数据' } },
    { component: DigitalVoice, props: { data: 'B 的数据' } },
    { component: BackImgSetting, props: { data: 'B 的数据' } },
  ],
  ContentDigitalHuman:[
    { component: DigitalImage, props: { data: 'B 的数据' } },
    { component: DigitalVoice, props: { data: 'B 的数据' } },
    { component: BackImgSetting, props: { data: 'B 的数据' } },
  ],
  VoiceDigitalHuman:[
    { component: DigitalVoice, props: { data: 'B 的数据' } },
  ]
}
console.log('+++++',tabConfigSetting)
console.log('=======',tabConfigSetting[props.DigitalKey])

let tabIndex = 2
const editableTabsValue = ref('1')
const editableTabs = shallowRef([
  {
    title: '数字人一',
    name: '1',
    contentComponents:tabConfigSetting[props.DigitalKey] || []
  },
  {
    title: '数字人二',
    name: '2',
    contentComponents:tabConfigSetting[props.DigitalKey] || []
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
      contentComponents:tabConfigSetting[props.DigitalKey] || []
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
.demoDigitalTabs{
  border: 1px solid var(--el-border-color-light);
  border-top: none;
  border-left: none;
  border-right: none;
}
/**样式穿透写法**/
.demoDigitalTabs :deep(.el-tabs__header){
  margin-bottom: 0;
}
.demoDigitalTabs :deep(.el-tabs__content){
  border-left: 1px solid var(--el-border-color-light);
  border-right: 1px solid var(--el-border-color-light);
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
