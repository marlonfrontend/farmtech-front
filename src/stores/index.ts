import { defineStore } from 'pinia'
import type { CountryInfoProps } from '@/components/CountryInfoCard.vue'

type StateProps = {
  loading: boolean
  countries: CountryInfoProps[]
  filter: string
}
export const useCountryStore = defineStore('country', {
  state: (): StateProps => ({
    loading: false,
    countries: [],
    filter: ''
  }),

  actions: {
    fetchCountries() {
      this.loading = true
      fetch(
        'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'
      )
        .then((response) => response.json())
        .then(
          (data) =>
            (this.countries = data.map((item: CountryInfoProps) => {
              const percentage = ((item.deceased / item.infected) * 100).toFixed(2) + '%'
              return { ...item, fatality: percentage }
            }))
        )
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false))
    }
  },

  getters: {
    filteredCountries: (state) =>
      state.countries.filter((item) => {
        if (!state.filter) {
          return !!item.infected && !!item.deceased
        }
        return item.country.toLocaleLowerCase().includes(state.filter.toLocaleLowerCase())
      })
  }
})
