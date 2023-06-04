<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  icon: String,
  modelValue: String,
  placeholder: String
})

const classInput = computed(() => ({
  'border-0 border-b border-primary w-full py-2 outline-none focus:border-opacity-50 transition-all duration-200 font-medium':
    true,
  'pl-10': props.icon
}))

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

defineExpose(props)
</script>

<template>
  <div class="relative">
    <app-icon
      v-if="icon"
      :icon="icon"
      :size="20"
      class="text-primary absolute top-1/2 -translate-y-1/2"
    />
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
      :class="classInput"
      :placeholder="placeholder"
    />
  </div>
</template>
