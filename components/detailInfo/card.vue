<template>
  <div id="infobox-detail" class="elevation-24">
    <v-row class="ma-0">
      <v-col class="col-12">
        <v-icon large color='orange'>
          $mdi-Weather-Sunset-Up
        </v-icon>
        <span>Lever de soleil</span>
        <span class="info_detail mt-2"> {{ cardDetail.sys.sunrise }}</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large color='yellow'>
          $mdi-Weather-Sunset-Down
        </v-icon>
        <span> Coucher de soleil </span>
        <span class="info_detail mt-2"> {{ card.sys.sunrise }}</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large color='blue'>
          $mdi-Water-Percent
        </v-icon>
        <span> Humidité </span>
        <span class="info_detail mt-2"> 7h35</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large>
          $mdi-Weather-Windy
        </v-icon>
        <span>Vent</span>
        <span class="info_detail mt-2"> 7h35</span>
      </v-col>

    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    cardDetail: {
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style>
#infobox-detail{
  border: 2px solid grey;
  border-radius: 20px
}

.info_detail {
  float:right

}
</style>
