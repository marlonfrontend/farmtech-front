<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores'

import CountryInfoCard from './CountryInfoCard.vue'

const { loading, filteredCountries } = storeToRefs(useCountryStore())
</script>

<template>
  <div class="flex flex-col gap-4">
    <template v-if="loading">
      <app-card v-for="i in 3" :key="i">
        <app-skeleton height="30px" />
        <div class="grid grid-cols-3 mt-5">
          <div class="px-5 flex flex-col gap-5">
            <app-skeleton />
            <app-skeleton />
          </div>
          <div class="px-5 flex flex-col gap-5 border-x">
            <app-skeleton />
            <app-skeleton />
          </div>
          <div class="px-5 flex flex-col gap-5">
            <app-skeleton />
            <app-skeleton />
          </div>
        </div>
      </app-card>
    </template>

    <country-info-card
      v-for="({ country, infected, deceased, fatality }, i) in filteredCountries"
      :key="i"
      :country="country"
      :infected="infected"
      :deceased="deceased"
      :fatality="fatality"
    />
  </div>
</template>
