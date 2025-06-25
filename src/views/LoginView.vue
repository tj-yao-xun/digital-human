<template>
  <div class="login-page">
    <div class="loginContent">
      <div classs="logoContent">
        <img src="@/assets/logo.jpg" alt="logo" class="logo" />
      </div>
      <div class="titleWrap">耀迅内容管理系统</div>
    </div>
    <div class="login-form">
      <el-row class="username-row">
        <el-input class="username-input" v-model="username" placeholder="请输入用户名">
          <template #suffix>
            <el-icon>
              <User />
            </el-icon>
          </template>
        </el-input>
      </el-row>

      <el-row class="password-row">
        <el-input
          class="password-input"
          v-model="password"
          placeholder="请输入密码"
          type="password"
        >
          <template #suffix>
            <el-icon>
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-row>

      <el-row class="login-button">
        <el-button type="primary" @click="userLogin">登陆</el-button>
      </el-row>
    </div>

    <div>
      <el-button @click="addApp">创建应用</el-button>
      <el-button @click="appInfo">获取应用</el-button>
      <el-button @click="appList">获取应用列表</el-button>
      <el-button @click="updateApp">更新应用</el-button>
      <el-button @click="updateAppState">更改应用状态</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Lock, User } from '@element-plus/icons-vue'

import userRequest from '@/request/usersRequest.ts'
import appRequest from '@/request/appRequest.ts'
import type { LoginReply } from '@/request/userRequestObj.ts'
import type {
  AppInfoReply,
  AppListReply,
  UpdateAppReply, UpdateAppStateReply
} from '@/request/appRequestObj.ts'

  (() => {
  // const userToken = LocalCache.getStringCache(Constant.USER_TOKEN)
  // if (userToken.length > 0) {
  //   location.href = "/"
  // }
})()

const username = ref('')
const password = ref('')

const userLogin = () => {

  const callback = (data: LoginReply): void => {
    window.localStorage.setItem('user-id', data.user_id.toString())
    window.localStorage.setItem('user-token', data.user_token)
    window.localStorage.setItem('user-flash-token', data.user_flash_token)
    window.localStorage.setItem('share256-key', JSON.stringify(data.share256_key))
    window.localStorage.setItem('username', data.username)
    window.localStorage.setItem('user-nick-name', data.user_nick_name)
    window.localStorage.setItem('permission-list', JSON.stringify(data.permission_list))
    // location.href = "/"
  }
  userRequest.Login(callback, username.value, password.value)
}

const addApp = () => {
  // <el-button>创建应用</el-button>
  // const callback = (data: AddAppReply): void => {
  //   console.log(123)
  //   console.log('Login successful:', data)
  // }
  // appRequest.AddApp(callback,'测试应用', 'test app', '2025-04-08 00:00:00', null, 1 )
}

const appInfo = () => {
  console.log('11233')
  // <el-button>获取应用</el-button>
  const callback = (data: AppInfoReply): void => {
    console.log(123)
    console.log('Login successful:', data)
  }
  appRequest.AppInfo(callback, '9dc0289b-b266-4729-b570-6a28fe9d627e')
}

const appList = () => {
  // <el-button>获取应用列表</el-button>
  const callback = (data: AppListReply): void => {
    console.log(123)
    console.log('Login successful:', data)
  }
  const appIdList: string[] = []
  appIdList.push('9dc0289b-b266-4729-b570-6a28fe9d627e')

  appRequest.AppList(callback, appIdList)
}

const updateApp = () => {
  // <el-button>更新应用</el-button>
  const callback = (data: UpdateAppReply): void => {
    console.log(123)
    console.log('Login successful:', data)
  }
  appRequest.UpdateApp(callback,'9dc0289b-b266-4729-b570-6a28fe9d627e',"应用综合管理平台")

}

const updateAppState = () => {
  // <el-button>更改应用状态</el-button>
  const callback = (data: UpdateAppStateReply): void => {
    console.log(123)
    console.log('Login successful:', data)
  }
  appRequest.UpdateAppState(callback,'9dc0289b-b266-4729-b570-6a28fe9d627e',2)


}
</script>

<style scoped>
.username-row {
  height: 36px;
  /*width: 400px;*/
}

/*.username-input {*/
/*  width: 200px;*/
/*  left: 10px;*/
/*}*/

.password-row {
  margin-top: 20px;
  height: 36px;
  /*  width: 400px;*/
  /*  top: 10px;*/
}

/*.password-input {*/
/*  width: 200px;*/
/*  left: 10px;*/
/*}*/

.login-button {
  /*top: 20px;*/
  /*left: 78%;*/
  margin-top: 15px;
  height: 36px;
  margin-bottom: 25px;
  width: 100%;
}

.login-form {
  /*position: absolute;*/
  width: 320px;
  /*height: 130px;*/
  max-width: 100%;
  /*top: 30%;*/
  /*left: 40%;*/
  margin: 0 auto;
  overflow: hidden;
}

.login-page {
  display: flex;
  flex-direction: column;
  width: 26%;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
}

.loginContent {
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logoContent {
  margin-top: 13%;
  text-align: center;
}

.logo {
  width: 52px;
  border-radius: 8px;
}

.titleWrap {
  text-align: center;
  font-size: 18px;
  color: #4e5969;
  font-weight: 600;
  margin: 11px 0;
}

.login-button button {
  width: 100%;
  height: 100%;
}
</style>
