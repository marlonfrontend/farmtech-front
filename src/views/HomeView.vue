<script setup lang="ts">
import AppSectionHero from '@/components/AppSectionHero.vue'
import AppCountryInfoList from '@/components/AppCountryInfoList.vue'
import AppSearchCard from '@/components/AppSearchCard.vue'
</script>

<template>
  <app-section-hero />
  <div class="max-w-[780px] px-4 md:px-0 mx-auto flex flex-col gap-6">
    <app-search-card />
    <app-country-info-list />
  </div>
</template>
