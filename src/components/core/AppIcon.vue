<script setup lang="ts">
const props = defineProps({
  icon: String,
  size: {
    type: Number,
    default: 24
  }
})

defineExpose(props)
</script>

<template>
  <svg viewBox="0 0 24 24" :width="`${size}px`" :height="`${size}px`">
    <use
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :xlink:href="`/icons.svg#${icon}`"
      :href="`/icons.svg#${icon}`"
    />
  </svg>
</template>
