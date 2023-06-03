<script setup lang="ts">
const props = defineProps({
  title: {
    type: String
  }
})

defineExpose(props)
</script>

<template>
  <div class="bg-white shadow border p-10 rounded">
    <h3 v-if="title" v-html="title" class="text-lg text-center font-semibold font-serif mb-5"></h3>
    <slot />
  </div>
</template>
