<template>
  <v-container>
    <h1 class="text-center">Weather</h1>
    <v-icon>
      $mdi-Magnify
    </v-icon>
      <search @onsearch-city="onSearchCity"/>
      <card :card="weatherData"  class="mt-5"/>
      <cardDetail :cardDetail="weatherData" class="mt-5"/>
  </v-container>
</template>

<script>
import card from '@/components/globalInfoCard/card'
import cardDetail from '@/components/detailInfo/card'
import search from '@/components/search/search'

export default {
  components: { card, cardDetail, search },
  data() {
    return {
      country : 'Bordeaux',
      weatherData: {},
    }
  },
  methods: {
    async getWeatherInfo() {
      await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.country}&appid=${process.env.weatherApiKey}`)
      .then((res) => {
        this.weatherData = res
        console.log(this.weatherData)
      return this.weatherData
      })
    },
    onSearchCity(value) {
      this.country = value
      this.getWeatherInfo(this.value)
    }
  },
  mounted() {
    this.getWeatherInfo();
  },
}
</script>

<style>


</style>
