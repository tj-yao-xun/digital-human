<template>
  <div class="listContainer">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>AI数字人视频</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="listBox">
      <div class="listHeaderBox">
        <span class="listHeaderTitle">AI数字人视频列表</span>
        <el-button type="primary" size="small" plain>创作视频</el-button>
      </div>

      <div  class="listTableBox">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="zip"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            fixed
            prop="zip"
            label="序号2"
            width="100">
          </el-table-column>
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <template #="{ row }">
              <el-button @click="handleClick(row)" plain type="primary" size="small">查看</el-button>
              <el-button type="danger" size="small" plain>编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
       </div>
      <div class="pageContainer">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="total, prev, pager, next, sizes"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <DialogBox/>
  </div>
</template>

<script lang="ts" setup>
import {defineComponent, ref} from 'vue'
import DialogBox from '@/components/DialogBox.vue'
import type { ComponentSize } from 'element-plus'

defineComponent({
  components: {
    DialogBox
  }
})

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('large')
const disabled = ref(false)
const background = ref(false)

const tableData =  [{
  date: '2016-05-02',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1518 弄',
  zip: 200333
}, {
  date: '2016-05-04',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1517 弄',
  zip: 200333
}, {
  date: '2016-05-01',
  name: '王  小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1519 弄',
  zip: 200333
}, {
  date: '2  016-05-03',
  name: '王小虎',
  province: '上海',
  city: '普陀区',
  address: '上海市普陀区金沙江路 1516 弄',
  zip: 200333
}];

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.listBox{
  margin-top: 20px;
  background: #fff;
  border-radius: 5px;
}
.pageContainer{
  margin-top: 20px;
  padding-bottom: 25px;
  display: flex;
  width: 99%;
  justify-content: end;
}
.listTableBox{
  width:98%;
  margin: 0 auto;
}
.listTableBox .cell{
  position: relative;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  text-align: start;
  background: #fafafa;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;
}

.listHeaderBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.listHeaderTitle{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 500;
  font-size: 16px;
}
</style>
