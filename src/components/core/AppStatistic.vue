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
    <div data-testid="title" class="font-medium">
      {{ title }}
    </div>

    <div v-if="value" class="font-serif text-primary text-xl">
      <span data-testid="value" v-html="value === null ? '-' : value" />
    </div>
  </div>
</template>
