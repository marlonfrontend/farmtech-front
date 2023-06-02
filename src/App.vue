<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <app-header />
  <main class="py-12 md:py-28">
    <router-view />
  </main>
</template>
