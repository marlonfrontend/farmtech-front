<script setup lang="ts">
import AppCard from './core/AppCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: '/'
  }
})

defineExpose(props)
</script>

<template>
  <app-card :title="title"> </app-card>
</template>
