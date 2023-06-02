<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '/'
  }
})

defineExpose(props)
</script>

<template>
  <router-link :to="to">
    <img class="logo" alt="Covidômetro" src="@/assets/images/logo.png" />
  </router-link>
</template>
