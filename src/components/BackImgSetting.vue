<template>
<div class="uploadContainer">
  <el-row :gutter="8"  v-if="props.DigitalKey !='TransparentDigitalHuman'">
    <el-col :span="5">
      <div class="labelStyle"><span>背景设置</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="proportion" placeholder="请选择背景" @change="handleChangeProportionOptions">
        <el-option
          v-for="item in proportionOptions"
          :key="item.id"
          :label="item.value"
          :value="item.id"
        />
      </el-select>
    </el-col>
  </el-row>

  <div class="backImgBox">
    <el-upload
      v-model:file-list="fileList"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      list-type="picture"
    >
      <el-button color="#626aef" type="primary" :icon="UploadFilled">上传图片</el-button>
<!--      <template #tip>-->
<!--        <div class="el-upload__tip">-->
<!--          图片大小不超过500M-->
<!--        </div>-->
<!--      </template>-->
    </el-upload>
  </div>
</div>
</template>

<script lang="ts" setup>
import { UploadFilled } from '@element-plus/icons-vue'

import { ref } from 'vue'

const props = defineProps({
  DigitalKey: {
    type: String,
    default: ''
  }
})
//背景部分的下拉选择
const proportion = ref()
const proportionOptions = ref([
  {
    id: 1,
    value: '默认背景',
  },
  {
    id: 2,
    value: '透明背景',
  },
  {
    id: 3,
    value: '自定义背景',
  },
])

import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
])

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (file) => {
  console.log(file)
}
</script>

<style scoped>
.uploadContainer{
  margin-top: 15px;
}
.backImgBox{
  width: 96%;
  margin: 0 auto;
  margin-top: 15px;
}
.el-row{
  width: 100%;
  align-items: center;
  margin-top: 15px;
}
.labelStyle{
  text-align: center;
}
</style>
