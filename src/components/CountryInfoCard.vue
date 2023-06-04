<script setup lang="ts">
export interface CountryInfoProps {
  country: string
  infected: number
  deceased: number
  fatality: number | string
}
const props = defineProps<CountryInfoProps>()

defineExpose(props)
</script>

<template>
  <app-card :title="country">
    <div class="grid gap-2 sm:grid-cols-3 sm:gap-0">
      <app-statistic title="Total de casos" :value="infected" />
      <app-statistic title="Mortes" bordered :value="deceased" />
      <app-statistic title="Fatalidade" :value="fatality" />
    </div>
  </app-card>
</template>
