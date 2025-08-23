<template>
  <div class="listContainer">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>AI数字人视频</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="listBox">
      <div class="listHeaderBox">
        <span class="listHeaderTitle">AI数字人视频列表</span>
        <el-button type="primary" size="small" plain @click="handleCreateVideoDialog">创作视频</el-button>
      </div>
      <div  class="listTableBox">
        <el-table
          :data="tableData"
          border
          stripe
          style="width: 100%">
          <el-table-column
            fixed
            type="index"
            label="序号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="dh_video_no"
            label="视频编码"
            width="300">
          </el-table-column>
<!--          <el-table-column-->
<!--            prop="preview_image_url"-->
<!--            label="预览图"-->
<!--            width="80">-->
<!--            <template #default="scope">-->
<!--              <el-button v-if="scope.row.preview_image_url" link type="primary" size="small" @click="handleViewImage">-->
<!--                查看-->
<!--              </el-button>-->
<!--            </template>-->
<!--          </el-table-column>-->
          <el-table-column
            prop="finished_product_url"
            label="视频地址"
            width="100">
            <template #default="scope">
              <el-button v-if="scope.row.finished_product_url" link type="primary" size="small" @click="handleViewVideo(scope.row.finished_product_url)">
                查看
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="dh_create_state"
            label="状态"
            width="120">
            <template #default="scope">
              <template v-if="scope.row.dh_create_state === '1'">创建中</template>
              <template v-else-if="scope.row.dh_create_state === '2'">创建完成</template>
              <template v-else>{{ scope.row.dh_create_state }}未创建</template>
            </template>
          </el-table-column>
          <el-table-column
            prop="expected_seconds"
            label="预计时长(秒)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="expected_points"
            label="预计消耗积分"
            width="120">
          </el-table-column>
          <el-table-column
            prop="actual_seconds"
            label="实际时长(秒)"
            width="120">
          </el-table-column>
          <el-table-column
            prop="actual_points"
            label="实际消耗积分"
            width="120">
          </el-table-column>
          <el-table-column
            prop="remarks"
            label="备注"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="200">
            <template #="{ row }">
              <el-button @click="handleClick(row)" plain type="primary" size="small">查看</el-button>
              <el-button type="danger" size="small" plain>编辑</el-button>
              <el-button type="success" size="small" plain>复制</el-button>
            </template>
          </el-table-column>
        </el-table>
       </div>

      <div class="pageContainer">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[5, 10, 15, 20]"
          :size="size"
          :disabled="disabled"
          :background="background"
          layout="total, prev, pager, next, sizes"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <DialogBox :dialogVisible="dialogVisible" :videoUUID="videoUUID" @update:dialogVisible="dialogVisible = $event"/>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted} from 'vue'
import DialogBox from '@/components/DialogBox.vue'
import type { ComponentSize } from 'element-plus'
import { ElMessageBox } from 'element-plus'
import dhRequest from "@/request/dhRequest"
import {DhCreatedDigitalHumanReplay, DhListReplay} from "@/request/dhRequestObj"
//TODO 后期删除
window.localStorage.setItem("user-token","81962ed8-1f23-4aed-9e19-5dfc15ea3638");
//END

const currentPage = ref(1)
const pageSize = ref(10)
const size = ref<ComponentSize>('large')
const disabled = ref(false)
const background = ref(false)
const total = ref(0)
//创建视频的唯一值
const videoUUID = ref("")
//制作视频弹窗
const dialogVisible = ref(false)
const handleCreateVideoDialog = () => {
  //TODO 先直接把弹窗显示出来
  dialogVisible.value = true
  // const callback = (data: DhCreatedDigitalHumanReplay): void => {
  //   videoUUID.value = data.dh_video_no
  //   console.log('hhhh==',videoUUID.value)
  //   dialogVisible.value = true
  // }
  // dhRequest.DhCreatedDigitalHuman(callback)
}

//列表页面数据加载
const tableData =  ref([]);
const getVideoList = ()=>{
  const callback = (data: DhListReplay): void => {
    tableData.value = data.data_list
    currentPage.value = data.page_no
    pageSize.value = data.page_size
    total.value = parseInt(String(data.count),10)
  }
  dhRequest.DhList(callback, currentPage.value, pageSize.value)
}

//视频查看
const handleViewVideo = (url: string) => {
  const htmlString = '<video src="'+ url +'" controls="controls" width="400"></video>';
  ElMessageBox.alert(
    htmlString,
    '查看',
    {dangerouslyUseHTMLString: true,confirmButtonText:'确定'}
  )
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  pageSize.value = val
  currentPage.value = 1
  getVideoList()
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  getVideoList()
  console.log(`current page: ${val}`)
}

onMounted(()=>{
  getVideoList();
})

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
