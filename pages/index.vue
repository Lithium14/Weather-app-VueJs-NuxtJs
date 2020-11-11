<template>
  <v-container>
    <input />
    <h1 class="text-center">{{ city }}</h1>
    <p>Population: {{ weather.city.population}}</p>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      city : 'Bordeaux',
      weather: {}
    }
  },
  methods: {
    async getWeatherInfo() {
      await this.$axios.$get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${process.env.weatherApiKey}`)
      .then((res) => {
        this.weather = res
      console.log(this.weather)})
    }
  },
  mounted() {
    this.getWeatherInfo();
  },
}
</script>

<style>

</style>
