<template>
  <v-container>
    <h1 class="text-center" style="color: Orange">{{ $t('home.weather') }}</h1>
      <v-col align="right">
        <v-icon @click="displaySearchBar" large>
          $mdi-Magnify
        </v-icon>
        <lang />
      </v-col>

      <search v-if="isAppear" @onsearch-city="onSearchCity"/>
      <v-col class="d-md-flex justify-space-between">
        <card :card="weatherData"  class="mt-5 col-md-5" />
        <cardDetail :cardDetail="weatherData" class="mt-5 col-md-5"/>
      </v-col>
  </v-container>
</template>

<script>
import card from '@/components/globalInfoCard/card'
import cardDetail from '@/components/detailInfo/card'
import search from '@/components/search/search'
import lang from '@/components/lang'

export default {
  components: { card, cardDetail, search },
  data() {
    return {
      country : 'Bordeaux',
      weatherData: {},
      isAppear: false
    }
  },
  methods: {
    async getWeatherInfo() {
      try {
        await this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.country}&appid=${process.env.weatherApiKey}`)
        .then((res) => {
        this.weatherData = res
        return this.weatherData
      })
      } catch (e) {
        e.message = 'Vous avez mal ortographié la ville saisie, veuillez réessayer !'
        const message = { notif : e.message, types: 1}

        this.$store.commit('notif/addNotif', message )
      }
    },
    onSearchCity(value) {
      this.country = value
      this.getWeatherInfo(this.value)
    },
    displaySearchBar() {
      this.isAppear = true
    }
  },
  mounted() {
    this.getWeatherInfo();
  },
}
</script>

<style scoped>
.v-col {
  border: 1px solid red
}
</style>

