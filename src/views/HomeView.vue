<script setup lang="ts">
import HeaderView from "@/views/HeaderView.vue";
import AsideView from "@/views/AsideView.vue";
</script>

<template>
  <el-container>
    <el-header>
      <HeaderView/>
    </el-header>
    <el-container class="contentWrapper">
      <el-aside>
        <AsideView/>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
 .el-header{
   /*background: url('./images/title_bg.png') no-repeat;*/
   background: var(--el-header-bg);
   position:fixed;
   display: flex;
   justify-content: space-between;
   /*align-items: center;*/
   box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
   padding: 0px 15px;
   /*line-height: 48px;*/
   width: 100%;
   z-index: 100;
   /*right: 0px;*/
 }
 .contentWrapper{
   margin-top: 60px;
 }
 .contentWrapper .el-aside{
   position: fixed;
   height: calc(100% - 60px);
   inset-block-start: 60px;
   z-index: 100;
 }
 .el-main{
   margin-left:var(--el-aside-width, 300px);
 }
</style>
