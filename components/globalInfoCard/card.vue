<template>
  <div id="global_info" class="elevation-24">
    <v-row class="ma-0">

      <v-col class="col-12">
        <v-icon medium>
          $mdi-mapMarker
        </v-icon>
        <span class="pt-2"><strong>{{ card.name }}, {{ card.sys.country }}</strong></span><br>
        <span class="caption">{{ time }}</span>
      </v-col>

      <v-col class="col-7">
        <img :src="'http://openweathermap.org/img/wn/' + card.weather[0].icon +'.png'">
        <span> {{ Math.round(card.main.temp - 273.15) }}°C</span>

      </v-col>

      <v-col>
        <p>{{ card.weather[0].description }}</p>
        <span> {{ Math.round(card.main.temp_max - 273.15) }}° / {{ Math.round(card.main.temp_min - 273.15) }}° </span>
        <span> Ressenti {{ Math.round(card.main.feels_like - 273.15) }}° </span>
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
      let dateLocale = date1.toLocaleString('fr-FR',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
      return dateLocale
    }
  }
}
</script>

<style>
#global_info {
  border: 2px solid grey;
  border-radius: 20px
}

.col {
  border: 1px solid red;
}

</style>
