<template>
  <div class="layoutSettingContainer">
    <el-row :gutter="8">
      <el-col :span="5">
        <div class="labelStyle"><span>推荐布局</span></div>
      </el-col>
      <el-col :span="19">
        <el-select v-model="layoutRecommend" placeholder="请选择推荐布局">
          <el-option
            v-for="item in layoutRecommendOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
    </el-row>

    <layout-digital-man></layout-digital-man>
    <layout-content-area></layout-content-area>
  </div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";
  import LayoutDigitalMan from "@/components/LayoutDigitalMan.vue";
  import LayoutContentArea from "@/components/LayoutContentArea.vue";

  const layoutRecommend = ref()
  const layoutRecommendOptions = [
    {
      value: '1',
      label: '布局一',
    },
    {
      value: '2',
      label: '布局二',
    }
  ]
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
</style>
