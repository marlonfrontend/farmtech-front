<script setup lang="ts">
import AppCountryInfoCard from './AppCountryInfoCard.vue'

interface Props {
  items?: any
}

const props = defineProps<Props>()

defineExpose(props)
</script>

<template>
  <div class="flex flex-col gap-4">
    <app-country-info-card v-for="({ country }, i) in items" :key="i" :country="country" />
  </div>
</template>
