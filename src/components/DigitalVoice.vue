<template>
  <el-row :gutter="8">
    <el-col :span="5">
      <div class="labelStyle"><span>数字人声音</span></div>
    </el-col>
    <el-col :span="19">
      <el-select v-model="voice" placeholder="请选择数字人声音" @change="handleChangeVoice">
        <el-option
          v-for="item in voiceOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-col>
  </el-row>

  <el-row :gutter="8" v-if="selectAudioValue">
    <el-col :span="5"></el-col>
    <el-col :span="19">
      <el-card class="audio-player-card">
        <div class="mt-3">
          <div class="playerBox">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(duration) }}</span>
          </div>
          <div class="audioBox">
            <el-button :icon="isPlaying ? VideoPause:VideoPlay" size="small" type="success" @click="togglePlay" circle></el-button>
            <el-slider v-model="currentTime" :max="duration" @change="seekTo" class="audio-progress-slider"></el-slider>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {computed, onMounted, onUnmounted, ref} from 'vue'
import {VideoPause,VideoPlay} from '@element-plus/icons-vue'
import {DhSoundListReplay} from "@/request/dhRequestObj";
import dhRequest from "@/request/dhRequest";
const voice = ref(null)
//数字人声音选项
const voiceOptions = ref([])
const getGraphicsVoiceOptions = () => {
  const callback = (data: DhSoundListReplay): void => {
    voiceOptions.value = data.data_list.filter(item => item && item.speaker_id).map((item) => {
      return {
        id:item.speaker_id,
        label: item.speaker_name, //名称
        value: item.speaker_id ?? '', //ID
        url: item.speaker_url  //音频链接
      }
    })
  }
  dhRequest.DhSoundList(callback)
}
// 当前选择的音频ID和音频对象
const selectedAudioId = ref(null)
const selectedAudio = computed(() =>
  Array.isArray(voiceOptions.value) && voiceOptions.value.find(audio => audio.id === selectedAudioId.value) || null
)
const selectAudioValue = ref();
//选择音频下拉事件
const handleChangeVoice = (value: string) => {
  selectedAudioId.value = value
  selectAudioValue.value = selectedAudio.value
  handleAudioSelect()
}
// 播放状态
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
// 音频元素
let audioElement = null
// 格式化时间
const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds)) return '00:00'
  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = Math.floor(timeInSeconds % 60)
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
// 初始化音频
const initAudio = () => {
  if (audioElement) {
    audioElement.pause()
    audioElement.removeEventListener('timeupdate', handleTimeUpdate)
    audioElement.removeEventListener('loadedmetadata', handleMetadataLoad)
  }

  if (selectedAudio.value) {
    audioElement = new Audio(selectedAudio.value.url)
    audioElement.addEventListener('timeupdate', handleTimeUpdate)
    audioElement.addEventListener('loadedmetadata', handleMetadataLoad)

    if (isPlaying.value) {
      audioElement.play()
    }
  }
}

// 时间更新处理
const handleTimeUpdate = () => {
  currentTime.value = audioElement.currentTime
}

// 元数据加载处理
const handleMetadataLoad = () => {
  duration.value = audioElement.duration
}

// 播放/暂停切换
const togglePlay = () => {
  if (!selectedAudio.value) return

  if (isPlaying.value) {
    audioElement.pause()
  } else {
    audioElement.play()
  }
  isPlaying.value = !isPlaying.value
}

// 调整进度
const seekTo = (time) => {
  if (audioElement) {
    audioElement.currentTime = time
  }
}

// 处理音频选择
const handleAudioSelect = () => {
  isPlaying.value = false
  currentTime.value = 0
  duration.value = 0
  initAudio()
}

// 生命周期钩子
onMounted(() => {
  getGraphicsVoiceOptions();
})

onUnmounted(() => {
  if (audioElement) {
    audioElement.pause()
    audioElement.removeEventListener('timeupdate', handleTimeUpdate)
    audioElement.removeEventListener('loadedmetadata', handleMetadataLoad)
    audioElement = null
  }
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
.playerBox,.audioBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.audioBox .el-slider{
  width: 88%;
}
</style>
