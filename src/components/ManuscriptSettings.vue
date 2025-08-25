<template>
  <div class="manuscriptNo">
    <el-divider content-position="left">
      <span class="labelTitleStyle">数字人文稿设置</span>
    </el-divider>
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
    <el-row :gutter="8">
      <el-col :span="5">
        <div class="labelStyle"><span>声音来源</span></div>
      </el-col>
      <el-col :span="19">
        <el-radio-group v-model="voiceSource">
          <el-radio value="1" size="large">数字人</el-radio>
          <el-radio value="2" size="large">视频</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <manuscript-content></manuscript-content>
    <!--数字人设置-->
    <digital-man-setting></digital-man-setting>
    <!--内容设置-->
    <content-setting></content-setting>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import ManuscriptContent from "@/components/ManuscriptContent.vue"
import DigitalHumanName from "@/components/DigitalHumanName.vue"
import DigitalManSetting from "@/components/ManuscriptSettingInclude/DigitalManSetting.vue";
import ContentSetting from "@/components/ManuscriptSettingInclude/ContentSetting.vue";

const voiceSource = ref()

</script>

<style scoped>
.el-row{
  width: 100%;
  align-items: center;
  margin-top: 15px;
}
.labelTitleStyle{
  color: #626aef;
  font-size: 14px;
  font-weight: bolder;
}
.labelStyle{
  text-align: center;
}
.addManuscriptBox{
  display: flex;
  justify-content: space-between;
}
</style>
