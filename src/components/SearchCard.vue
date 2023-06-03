<script setup lang="ts">
import { useCountryStore } from '@/stores'

const countryStore = useCountryStore()
</script>

<template>
  <app-card title="Filtrar dados sobre um país">
    <form class="px-20">
      <app-input v-model="countryStore.filter" icon="search" placeholder="Digite o nome do país" />
    </form>
  </app-card>
</template>
