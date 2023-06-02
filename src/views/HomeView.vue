<script setup lang="ts"></script>

<template>
  <header class="bg-white shadow-md h-16 flex items-center">
    <div class="container">
      <router-link to="/">
        <img class="logo" alt="Covidômetro" src="@/assets/images/logo.png" />
      </router-link>
    </div>
  </header>

  <main class="py-12 md:py-28">
    <section>
      <div class="container">
        <div class="flex items-center justify-between">
          <div class="max-w-[600px] text-center md:text-left md:mb-32 mb-12">
            <h2 class="text-3xl font-semibold md:text-4xl font-serif">Conheça o Covidômetro</h2>
            <p class="font-medium">
              Fique atualizado com velocidade e transparência. O Covidômetro é uma ferramenta que
              mostra para você em tempo real o número de casos e óbitos relacionados a pandemia da
              COVID-19 ao redor do mundo.
            </p>
          </div>
          <div class="-mt-8 hidden md:block">
            <img src="@/assets/images/doctors.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="max-w-[780px] mx-auto flex flex-col gap-6">
        <div class="bg-white shadow border p-10 rounded text-center md:-mt-24">
          <h3 class="text-lg font-semibold font-serif mb-5">Filtrar dados sobre um país</h3>
          <div class="px-20">
            <form>
              <div class="relative">
                <input
                  type="text"
                  class="border-0 border-b border-primary w-full py-2 focus:outline-none"
                  placeholder="Digite o nome do país"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div v-for="i in 5" :key="i" class="bg-white shadow border p-10 rounded text-center">
            <h3 class="text-lg font-semibold font-serif mb-5">África do Sul</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
