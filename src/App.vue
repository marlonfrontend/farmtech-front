<script setup lang="ts">
import { useCountryStore } from '@/stores'
import { RouterView } from 'vue-router'

const { fetchCountries } = useCountryStore()
fetchCountries()
</script>

<template>
  <app-header />
  <main class="py-12 md:py-28">
    <router-view />
  </main>
</template>
