<template>
  <v-container>
    <h1 class="text-center">Météo</h1>
      <card :card="weatherData" />

  </v-container>
</template>

<script>
import card from '@/components/globalInfoCard/card'

export default {
  components: { card },
  data() {
    return {
      country : 'Bordeaux',
      weatherData: {},
      lat: 44.8404,
      lon: -0.5805
    }
  },
  methods: {
    async getWeatherInfo() {
      await this.$axios.$get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.country}&appid=${process.env.weatherApiKey}`)
      .then((res) => {
        this.weatherData = res
      console.log(this.weatherData)})
    }
  },
  mounted() {
    this.getWeatherInfo();
  },
}
</script>

<style>


</style>
