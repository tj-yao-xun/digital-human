<template>
  <el-dialog :close-on-click-modal="false"   v-model="localDialogVisible" title="创作视频" width="500">
    <!--生成视频类型-->
    <generate-video  @select-data="handleSelectVideoData" ></generate-video>

    <div class="component-container" v-if="resolvedComponents.length>0">
      <template v-for="(item, index) in resolvedComponents" :key="index">
        <component :is="item.component" v-bind="item.props || {}" />
      </template>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script type="ts" setup>
import { ref,watch,computed,watchEffect,markRaw,onUnmounted,shallowRef } from 'vue'
import commonConfig from "@/config/common"
import GenerateVideo from "@/components/GenerateVideo.vue"
const emits = defineEmits(['update:dialogVisible'])
const props =  defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  },
  videoUUID:{
    type:String,
    default:''
  }
})
const localDialogVisible = ref(props.dialogVisible)
// 监听父组件传递的值变化
watch(() => props.dialogVisible, (newValue) => {
  localDialogVisible.value = newValue ?? false;
})
// 监听本地值变化并通知父组件
watch(localDialogVisible, (newValue) => {
  emits('update:dialogVisible', newValue); // 推荐这种方式
})
// 当前页面配置
const selectedPage = ref();

//接收子组件传值
const handleSelectVideoData = (data) => {
  console.log('视频选择的值==',data)
  selectedPage.value = data
}
// 用来存最终要渲染的、已解析好的组件配置
const resolvedComponents = shallowRef([]);
// 获取当前页面配置
const currentPageConfig = computed(() => {
  return commonConfig.videoSettingConfig?.[selectedPage.value?.toString()] || null
})
// 监听配置变化并加载组件
watchEffect(async () => {
  const config = currentPageConfig.value
  if (!config?.components) {
    resolvedComponents.value = [];
    return;
  }
  resolvedComponents.value = [] // 清空前先重置
  try {
    // 并行加载所有组件
    const componentPromises = config.components.map(async item => {
      // 统一处理两种加载方式
      let component
      if (typeof item.component === 'function') {
        const module = await item.component()
        component = module.default
      } else {
        // 处理 defineAsyncComponent 情况
        component = item.component
      }
      return {
        component: markRaw(component), // 关键修改
        props: item.props || {}
      }
    })
    // 等待所有组件加载完成
    resolvedComponents.value = await Promise.all(componentPromises)
  } catch (error) {
    console.error('组件加载失败:', error)
    resolvedComponents.value = []
  } finally {
    // loading.value = false
  }
})
// 添加卸载处理
onUnmounted(() => {
  resolvedComponents.value = []; // 清空组件引用
});
</script>

<style scoped>
.component-container{
  margin-top: 15px;
}
</style>
