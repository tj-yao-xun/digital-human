<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>数字人形象</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="graphics" placeholder="请选择数字人形象"  @change="handleChangeGraphicsOptions">
        <el-option
          v-for="item in graphicsOptions"
          :key="item?.value || ''"
          :label="item?.label || ''"
          :value="item?.value || ''"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8" v-if="imgUrl">
    <el-col :span="5"></el-col>
    <el-col :span="19">
      <div class="basicImgBox">
        <el-image :src="imgUrl" fit="fill"/>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import {DhImagesListReplay} from "@/request/dhRequestObj";
import dhRequest from "@/request/dhRequest";
const graphics = ref('')
const imgUrl = ref()

//数字人形象选项
const graphicsOptions = ref([])
const getGraphicsOptions = () => {
  const callback = (data: DhImagesListReplay): void => {
    graphicsOptions.value = data.data_list.filter(item => item && item.digital_human_id).map((item) => {
      return {
        label: item.digital_human_name, //名称
        value: item.digital_human_id ?? '', //ID
        thumb: item.digital_human_url  //缩略图
      }
    })
  }
  dhRequest.DhImagesList(callback)
}
//下拉选择数字人形象
const handleChangeGraphicsOptions = (value: string) => {
  graphicsOptions.value.forEach((item: any) => {
    if (item.value === value) {
      imgUrl.value = item.thumb
    }
  })
}

onMounted(() => {
  getGraphicsOptions()
})

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
.basicImgBox .el-image{
  height: 150px;
}
</style>
