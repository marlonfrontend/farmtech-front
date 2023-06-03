<script setup lang="ts">
import AppCard from './core/AppCard.vue'

interface Props {
  country?: string
}

const props = defineProps<Props>()

defineExpose(props)
</script>

<template>
  <app-card :title="country">
    <div class="grid grid-cols-3">
      <div class="">
        <div>Total de casos</div>
        <div class="font-serif text-primary text-xl">32.2323</div>
      </div>
      <div class="border-x">
        <div>Mortes</div>
        <div class="font-serif text-primary text-xl">32.2323</div>
      </div>
      <div class="">
        <div>Fatalidade</div>
        <div class="font-serif text-primary text-xl">32.2323</div>
      </div>
    </div>
  </app-card>
</template>
