<template>
  <div class="basicContainer">
    <digital-image></digital-image>
    <digital-voice></digital-voice>
    <digital-scale></digital-scale>
  </div>
</template>

<script lang="ts" setup>
import DigitalImage from "@/components/DigitalImage.vue";
import DigitalVoice from "@/components/DigitalVoice.vue";
import DigitalScale from "@/components/DigitalScale.vue";
</script>

<style scoped>
.basicContainer {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
}
</style>
