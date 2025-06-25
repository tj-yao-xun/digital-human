<template>
  <div class="manuscriptBox">
    <span>数字人播报内容</span>
    <div class="manuscript">
      <el-input
        v-model="manuscript"
        :autosize="{ minRows: 2, maxRows: 4 }"
        type="textarea"
        placeholder="请输入播报内容"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
const manuscript = ref('')
</script>

<style scoped>
.manuscriptBox{
  width: 96%;
  margin: 0 auto;
  margin-top: 10px;
}
.manuscript{
  margin-top: 10px;
}
</style>
