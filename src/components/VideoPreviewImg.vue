<template>
  <div class="videoPreviewBox">
    <el-image style="height: 200px" :src="url" fit="contain" />
    <el-button class="createBtn" type="primary">生成预览图</el-button>
  </div>
</template>

<script lang="ts" setup>
const url= 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped>
.videoPreviewBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.createBtn{
  margin-top: 20px;
  width: 250px;
}
</style>
