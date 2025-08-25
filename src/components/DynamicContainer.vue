<template>
  <div class="dynamic-container">
      <component
        v-for="(compConfig, index) in components"
        :key="index"
        :is="compConfig.component"
        v-bind="compConfig.props"
      ></component>
  </div>
</template>

<script setup>
const props = defineProps({
  components: {
    type: Array,
    required: true
  }
})
</script>
