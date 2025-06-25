<template>
  <div class="manuscriptNo">
    <el-row :gutter="8">
      <el-col :span="5">
        <div class="labelStyle"><span>播报序号</span></div>
      </el-col>
      <el-col :span="19">
        <div class="addManuscriptBox">
           <el-text class="mx-1">NO.89</el-text>
           <el-button type="primary">添加播报稿</el-button>
        </div>
      </el-col>
    </el-row>
    <digital-human-name></digital-human-name>
    <manuscript-content></manuscript-content>
  </div>
</template>

<script lang="ts" setup>

import ManuscriptContent from "@/components/ManuscriptContent.vue";
import DigitalHumanName from "@/components/DigitalHumanName.vue";
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
.addManuscriptBox{
  display: flex;
  justify-content: space-between;
}
</style>
