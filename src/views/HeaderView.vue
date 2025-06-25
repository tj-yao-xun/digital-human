<script setup lang="ts">
import {ref} from 'vue'

const username = ref();
const realName = ref()

const loginOut = (() => {
  // // 通知登出
  // const addHeader: Map<string, string> = new Map<string, string>()
  // const body: object = {
  //   UserToken: LocalCache.getStringCache(""),
  // }
  // const callFunc = ((data:string) => {
  //   const resp = OkBody.decode(data)
  //   console.log(resp)
  //   LocalCache.clearCache()
  //   location.href = "/login"
  // })
  // RequestApi.PostRequest(API_URL.LAYOUT, addHeader, body, callFunc)
});

(() => {
  // const userInfo = LocalCache.getCache(Constant.USER_DATA)
  // username.value = userInfo.Username
  // realName.value = userInfo.UserZhName.toString().substring(0, 1)

  username.value = 'csy'
  realName.value = 'C'
})()

</script>

<template>
  <div class="headerLogo">
    <div class="logo"></div>
    <h1>系统内容管理平台</h1>
  </div>

  <div class="headerBottom">
    <div class="header-icon">
      <el-avatar :size="30" style="background-color: blue;font-size: 30px">{{ realName }}</el-avatar>
    </div>

    <div class="header-name">
      <span>{{ username }}</span>
    </div>

    <div class="header-login-out">
      <span type="primary" @click="loginOut">退出</span>
    </div>
  </div>

</template>


<style scoped>
.headerLogo{
  display: flex;
  align-items: center;
  height: 100%;
  /*padding-top: 15px;*/
  align-self: center;
}
.headerLogo h1{
  font-size: 20px;
  font-family: Inter-Medium, Inter;
  font-weight: 600;
  color: #FFFFFF;
  margin-left: 12px;
}
.headerBottom {
  color: white;
  font-size: 20px;
  display: flex;
  padding-top: 10px;
  width: 15%;
}
.logo {
  width: 30px;
  border-radius: 8px;
  height: 30px;
  background: url("@/assets/logo.jpg") no-repeat;
  background-size: contain;
}
.header-icon {
  /*position: absolute;*/
  /*top: 15px;*/
  /*right: 135px;*/
}
.header-login-out span {
  /*position: absolute;*/
  /*top: 55px;*/
  /*right: 140px;*/
  color: #ddd;
  font-size: 16px;
  padding-left: 15px;
  cursor: pointer;
}
.header-name {
  /*position: absolute;*/
  /*top: 25px;*/
  padding-left: 14px;
  /*right: 35px;*/
}
</style>
