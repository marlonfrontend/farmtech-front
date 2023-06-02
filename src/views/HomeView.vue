<script setup lang="ts">
import AppSectionHero from '@/components/AppSectionHero.vue'
import AppCountryInfoList from '@/components/AppCountryInfoList.vue'
import AppSearchCard from '@/components/AppSearchCard.vue'
</script>

<template>
  <app-section-hero
    title="Conheça o Covidômetro"
    subtitle="Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que mostra para você em tempo real o número de casos e óbitos relacionados a pandemia da COVID-19 ao redor do mundo."
  />
  <div class="max-w-[780px] px-4 md:px-0 mx-auto flex flex-col gap-6">
    <app-search-card class="md:-mt-24" />
    <app-country-info-list />
  </div>
</template>
