<template>
    <span>生成视频类型</span>
    <el-select
      v-model="videoValue"
      placeholder="请选择生成视频类型"
      class="videoSelectStyle"
      @change="handleChangeVideoType"
    >
      <el-option
        v-for="item in options"
        :key="item.key"
        :label="item.label"
        :value="item.key"
      />
    </el-select>
</template>

<script type="ts" setup>
import commonConfig from "@/config/common"
import { ref } from 'vue'
const videoValue = ref('')
const options = commonConfig.videoTypeOptions

const emit = defineEmits(['select-data','message']);

const handleChangeVideoType = (value) => {
  videoValue.value = value
  emit('select-data', value)
}
</script>

<style scoped>
.videoSelectStyle{
  width: 362px;
  margin-left: 18px;
}
</style>
