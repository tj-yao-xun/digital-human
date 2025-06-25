<template>
  <div class="videoGenerationBox">
    <p>文字数<span>234</span>,预计时长<span>50分钟</span>,预计使用积分<span>000</span></p>
    <el-button type="primary">生成视频</el-button>
    <p>生成阶段：待生成</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.videoGenerationBox{
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin: 0 auto;
}
.videoGenerationBox p{
  font-size: 16px;
}
.videoGenerationBox p span{
  font-weight: 600;
  color: #E6A23C;
  padding-left: 2px;
  padding-right: 2px;
}
.videoGenerationBox .el-button{
  margin-top: 10px;
  margin-bottom: 10px;
}
.videoGenerationBox p:last-child{
  font-size: 13px;
}
</style>
