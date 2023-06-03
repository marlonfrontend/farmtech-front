<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

const props = defineProps<Props>()

defineExpose(props)
</script>

<template>
  <section class="container px-4">
    <div class="flex items-center justify-between">
      <div class="max-w-[600px] text-center md:text-left md:mb-32 mb-12">
        <h2 v-if="title" v-html="title" class="text-3xl font-semibold md:text-4xl font-serif"></h2>
        <p v-if="subtitle" v-html="subtitle" class="font-medium"></p>
      </div>
      <div class="-mt-8 hidden md:block">
        <img src="@/assets/images/doctors.svg" alt="" />
      </div>
    </div>
  </section>
</template>
