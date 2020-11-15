<template>
  <div id="global_info" class="elevation-24">
    <v-row class="ma-0">
      {{this.card.weather[0].icon}}
      <v-col class="col-12">
        <v-icon medium class="mb-2">
          $mdi-mapMarker
        </v-icon>
        <span><strong>{{ card.name }}, {{ card.sys.country }}</strong></span><br>
        <span class="caption ml-1">{{ time }}</span>
      </v-col>

      <v-col class="col-7 d-flex ma-0">
        <img :src="switchIconWeather" width="60px" height="60px" class="mr-2 mt-3">
        <span id="actually_temp"> {{ Math.round(card.main.temp - 273.15) }}°</span>
      </v-col>

      <v-col class="mt-2">
        <span class="info_detail"> {{ firstLetterUpperCaseDescription }} </span><br>
        <span class="info_detail"> {{ Math.round(card.main.temp_max - 273.15) }}° / {{ Math.round(card.main.temp_min - 273.15) }}° </span><br>
        <span class="info_detail"> {{ $t('global.feels_like') }} {{ Math.round(card.main.feels_like - 273.15) }}° </span>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  props : {
    card: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    time() {
      let date1 = new Date();
      let hours = date1.getHours() + ':' +date1.getMinutes();
      let dateLocale = date1.toLocaleDateString(this.$i18n.locale,{
        weekday: 'short',
        month: 'long',
        day: 'numeric',
      });
      return dateLocale +' '+ hours
    },
    switchIconWeather() {
      let image;
      switch (this.card.weather[0].icon) {
        case '01d' || '01n':
          image = '/sun.png'
          break
        case '02d' || '02n':
          image = '/few_clouds.png'
          break
        case '03d' || '03n':
          image = '/scattered_clouds.png'
          break
        case '04d' || '04n':
          image = '/broken_clouds.png'
          break
        case '09d' || '09n':
          image = '/shower_rain.png'
          break
        case '10d' || '10n':
          image = '/raining.png'
          break
        case '11d' || '11n':
          image = '/storm.png'
          break
        case '13d' || '13n':
          image = '/snowflake.png'
          break
        case '50d' || '50n':
          image = '/mist.png'
          break
      }
      return image
    },
    firstLetterUpperCaseDescription() {
      let text;
      let idWeather = this.card.weather[0].id
      if(idWeather > 799 && idWeather < 801) {
        text = this.$t('global.clear_sky')
      } else if(idWeather > 800 ) {
        text =  this.$t('global.few_clouds')
      } else if (idWeather > 700 && idWeather < 762 ) {
        text = this.$t('global.mist')
      } else if (idWeather > 761 && idWeather < 782) {
        text = this.$t('global.tornado')
      } else if (idWeather > 599 & idWeather < 630) {
        text = this.$t('global.snow')
      } else if (idWeather > 499 & idWeather < 532) {
        text = this.$t('global.rain')
      } else if (idWeather > 299 && idWeather < 330) {
        text = this.$t('global.shower_rain')
      } else if (idWeather > 199 & idWeather < 235) {
        text = this.$t('global.thunderstorm')
      }
      return text
    },

  }
}
</script>

<style scoped>
#global_info {
  border: 2px solid grey;
  border-radius: 20px
}

.info_detail {
  float:right;
  font-size:0.9rem
}

#actually_temp {
  text-align:center;
  font-size: 3.5rem
}
</style>
