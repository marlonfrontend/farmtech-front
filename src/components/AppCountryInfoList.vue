<script setup lang="ts">
import AppCountryInfoCard from './AppCountryInfoCard.vue'
</script>

<template>
  <div class="flex flex-col gap-4">
    <app-country-info-card v-for="i in 5" :key="i" title="África do Sul" />
  </div>
</template>
