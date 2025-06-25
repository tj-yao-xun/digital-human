<script setup lang="ts">
import LoginView from "@/views/LoginView.vue";
import MainView from "@/views/HomeView.vue";

let loginData: boolean;
loginData = true;

(() => {
  // const userToken = LocalCache.getStringCache(Constant.USER_TOKEN)
  // loginData = userToken.length > 0;
})()
</script>

<template>
  <div :class="[`common-layout`, !loginData ? 'alignItems':'']">
      <MainView v-if="loginData"></MainView>
      <LoginView v-else></LoginView>
  </div>
</template>

<style scoped>
  .common-layout{
    display: flex;
    height: 100vh;
    overflow: auto;
    background: url('./images/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    /*align-items: center;*/
  }
  .alignItems{
    align-items: center;
  }
</style>
