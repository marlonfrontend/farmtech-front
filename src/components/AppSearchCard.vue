<script setup lang="ts">
import AppInput from './core/AppInput.vue'
import AppCard from './core/AppCard.vue'
</script>

<template>
  <app-card title="Filtrar dados sobre um país">
    <div class="px-20">
      <form>
        <app-input />
      </form>
    </div>
  </app-card>
</template>
