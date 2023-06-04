<script setup lang="ts">
const props = defineProps({
  title: String,
  value: [String, Number],
  bordered: Boolean
})

defineExpose(props)
</script>

<template>
  <div class="text-center" :class="bordered ? 'border-y py-2 sm:border-x sm:border-y-0' : null">
    <div class="font-medium" v-html="title" />
    <span class="font-serif text-primary text-xl" v-html="value === null ? '-' : value" />
  </div>
</template>
