<script setup lang="ts">
// 获取用户可见列表信息

</script>

<template>
  <el-scrollbar>
    <el-menu
      active-text-color="#2280EE"
      background-color="#2280EE"
      text-color="#fff"
      default-active="2"
      class="aside-menu"
      :router="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <span>运营统计</span>
        </template>
        <el-menu-item index="/statistics"><span>应用统计</span></el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span>应用管理</span>
        </template>
        <el-menu-item index="/app/save"><span>开通应用</span></el-menu-item>
        <el-menu-item index="/app/list"><span>应用列表</span></el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <span>权限管理</span>
        </template>
        <el-menu-item index="/authority/list"><span>角色列表</span></el-menu-item>
        <el-menu-item index="/authority/list"><span>权限列表</span></el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/users/list"><span>用户列表</span></el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-scrollbar>
</template>


<style scoped>
.aside-menu {
  background-color:#2280EE;
  min-height: 800px;
  max-width: 200px;
}

.aside-menu span {
  font-size: 1.1em;
}
.el-menu-item.is-active {
  color: white;
  background-color:#579FF2;
}
.aside-menu{
  width: 200px;
}
</style>
