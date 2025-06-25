<template>
  <el-dialog v-model="dialogVisible" title="创作视频" width="500">
    <!--生成视频类型-->
    <!--<generate-video></generate-video>-->
    <!--数字人基础配置-->
<!--    <basic-configuration></basic-configuration>-->
    <!--动态增减tab-->
<!--    <dynamic-tabs></dynamic-tabs>-->
    <!--是否添加字幕-->
<!--    <subtitle-configuration></subtitle-configuration>-->
    <!--数字人文稿 内容-->
<!--    <manuscript-content></manuscript-content>-->
    <!--数字人文稿 播报序号-->
<!--    <manuscript-no></manuscript-no>-->
    <!--背景图片设置-->
<!--    <back-img-setting></back-img-setting>-->
    <!--内容区域上传-->
<!--    <content-area-upload></content-area-upload>-->
    <!--内容区域上传带动态Tab-->
<!--    <dynamic-content-tabs></dynamic-content-tabs>-->
     <!--数字人布局-->
<!--    <layout-setting></layout-setting>-->
    <!--数字人文稿设置-->
<!--    <manuscript-settings></manuscript-settings>-->
    <!--视频预览图-->
<!--    <video-preview-img></video-preview-img>-->
    <!--视频生成-->
    <video-generation></video-generation>

<!--    <template #footer>-->
<!--      <div class="dialog-footer">-->
<!--        <el-button @click="dialogVisible = false">取消</el-button>-->
<!--        <el-button type="primary" @click="dialogVisible = false">-->
<!--          提交-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </template>-->

  </el-dialog>
</template>

<script type="ts" setup>
import { ref } from 'vue'
import GenerateVideo from "@/components/GenerateVideo.vue"
import BasicConfiguration from "@/components/BasicConfiguration.vue";
import DynamicTabs from "@/components/DynamicTabs.vue";
import SubtitleConfiguration from "@/components/SubtitleConfiguration.vue";
import ManuscriptContent from "@/components/ManuscriptContent.vue";
import ManuscriptNo from "@/components/ManuscriptNo.vue";
import BackImgSetting from "@/components/BackImgSetting.vue";
import ContentAreaUpload from "@/components/ContentAreaUpload.vue";
import DynamicContentTabs from "@/components/DynamicContentTabs.vue";
import LayoutDigitalMan from "@/components/LayoutDigitalMan.vue";
import LayoutSetting from "@/components/LayoutSetting.vue";
import ManuscriptSettings from "@/components/ManuscriptSettings.vue";
import VideoPreviewImg from "@/components/VideoPreviewImg.vue";
import VideoGeneration from "@/components/VideoGeneration.vue";

const dialogVisible = ref(true)

const handleClose = (done) => {
  console.log('close');
  done();
}
</script>

<style scoped>

</style>
