<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '/'
  }
})

defineExpose(props)
</script>

<template>
  <div class="bg-white shadow border p-10 rounded text-center">
    <h3 class="text-lg font-semibold font-serif mb-5">{{ title }}</h3>
    <slot />
  </div>
</template>
