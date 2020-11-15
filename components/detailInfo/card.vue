<template>
  <div id="infobox-detail" class="elevation-24">
    <!-- <v-row class="ma-0">
      <v-col class="col-12">
        <v-icon large color='orange'>
          $mdi-Weather-Sunset-Up
        </v-icon>
        <span>{{ $t('detail.sunrise') }}</span>
        <span class="info_detail mt-2"> {{ sunriseTime }}</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large color='yellow'>
          $mdi-Weather-Sunset-Down
        </v-icon>
        <span> {{ $t('detail.sunset') }} </span>
        <span class="info_detail mt-2"> {{ sunsetTime }}</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large color='blue'>
          $mdi-Water-Percent
        </v-icon>
        <span> {{ $t('detail.humidity') }} </span>
        <span class="info_detail mt-2"> {{ cardDetail.main.humidity }} %</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large>
          $mdi-Weather-Windy
        </v-icon>
        <span>{{ $t('detail.wind') }}</span>
        <span class="info_detail mt-2"> {{ cardDetail.wind.speed }} m/s </span>
      </v-col>

    </v-row> -->
  </div>
</template>

<script>
export default {
  props: {
    cardDetail: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    sunriseTime() {
      let date = new Date(this.cardDetail.sys.sunrise * 1000);
      let time = date.getHours() + ':' + date.getMinutes();
      return time
    },
    sunsetTime() {
      let date = new Date(this.cardDetail.sys.sunset * 1000);
      let time = date.getHours() + ':' + date.getMinutes();
      return time
    }
  },

}
</script>

<style scoped>
#infobox-detail{
  border: 2px solid grey;
  border-radius: 20px
}

.info_detail {
  float:right

}
</style>
