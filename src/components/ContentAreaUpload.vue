<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>内容类型</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="contentKind" placeholder="请选择内容类型" @change="handleChangeContentKind">
        <el-option
          v-for="item in contentKindOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row v-if="contentKind">
    <el-col :span="5"></el-col>
    <el-col :span="19">
      <el-upload
        v-model:file-list="fileList"
        list-type="picture"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button type="primary">上传{{ contentKind }}</el-button>
      </el-upload>
    </el-col>
  </el-row>

  <el-row v-if="contentKind && contentKind!='图片'">
    <el-col :span="5">
      <div class="labelStyle"><span>是否去LOGO</span></div>
    </el-col>
    <el-col :span="19">
      <el-radio-group v-model="logoVal">
        <el-radio :value="1" size="large">保留LOGO</el-radio>
        <el-radio :value="2" size="large">去除LOGO</el-radio>
      </el-radio-group>
    </el-col>
  </el-row>

  <template  v-if="contentKind && contentKind==='PDF'">
    <el-row>
      <el-col :span="5">
        <div class="labelStyle"><span>LOGO X坐标</span></div>
      </el-col>
      <el-col :span="19">
        <el-input v-model="xVal" placeholder="请输入LOGO x 坐标" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <div class="labelStyle"><span>LOGO Y坐标</span></div>
      </el-col>
      <el-col :span="19">
        <el-input v-model="yVal" placeholder="请输入LOGO Y坐标" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <div class="labelStyle"><span>LOGO宽度</span></div>
      </el-col>
      <el-col :span="19">
        <el-input v-model="widthVal" placeholder="请输入LOGO宽度" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5">
        <div class="labelStyle"><span>LOGO高度</span></div>
      </el-col>
      <el-col :span="19">
        <el-input v-model="heightVal" placeholder="请输入LOGO高度" />
      </el-col>
    </el-row>
  </template>
</template>

<script lang="ts" setup>
import {  ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { UploadProps, UploadUserFile } from 'element-plus'

const contentKind = ref('')
const logoVal = ref(1)
const xVal = ref('')
const yVal = ref('')
const widthVal = ref('')
const heightVal = ref('')

//内容类型
const contentKindOptions = [
  {
    value: '图片',
    label: '图片',
  },
  {
    value: 'PPT',
    label: 'PPT',
  },
  {
    value: 'PDF',
    label: 'PDF',
  },
  {
    value: '视频',
    label: '视频',
  }
]
const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
])
const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}
const handleChangeContentKind=(val)=>{
  console.log(val);
}
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
.uploadContainer{
  display: flex;

}
</style>
