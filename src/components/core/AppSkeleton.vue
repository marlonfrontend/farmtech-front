<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '180px'
  },
  height: {
    type: String,
    default: '20px'
  }
})

defineExpose(props)
</script>

<template>
  <div
    class="leading-relaxed mx-auto animate-pulse bg-gray-300"
    :style="`width: ${width}; height: ${height};`"
  ></div>
</template>
