<template>
  <div id="detail_info" class="elevation-24">
    <v-row class="ma-0">
      <v-col class="col-12">
        <v-icon large color='orange'>
          $mdi-Weather-Sunset-Up
        </v-icon>
        <span>Lever de soleil</span>
        <span text-align='right'> 7h35</span>
      </v-col>

      <v-col class="col-12">
        <v-icon large color='yellow'>
          $mdi-Weather-Sunset-Down
        </v-icon>
        <span> Coucher de soleil </span>
      </v-col>

      <v-col class="col-12">
        <v-icon large color='blue'>
          $mdi-Water-Percent
        </v-icon>
        <span> Humidité </span>
      </v-col>

      <v-col class="col-12">
        <v-icon large>
          $mdi-Weather-Windy
        </v-icon>
        <span>Vent</span>
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
#detail_info{
  border: 2px solid grey;
  border-radius: 20px
}
</style>
