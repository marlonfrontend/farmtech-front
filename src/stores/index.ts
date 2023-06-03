import { defineStore } from 'pinia'

export const useCountryStore = defineStore('country', {
  state: () => ({
    countries: []
  }),
  actions: {
    fetchCountries() {
      fetch(
        'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true'
      )
        .then((response) => response.json())
        .then((data) => (this.countries = data))
        .catch((error) => console.log(error))
    }
  },
  getters: {
    teste: (state) => state.countries
  }
})
