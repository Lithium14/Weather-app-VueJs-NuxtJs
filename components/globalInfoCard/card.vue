<template>
  <div id="global_info" class="elevation-24">
    <div>
      <v-icon>
        $mdi-mapMarker
      </v-icon>
      <p><strong>{{ card.city.name }}</strong></p>
      <p class="caption">{{ time }}</p>
    </div>
    <div>
      <!-- TODO AFFICHER TEMPÉRATURE MIN:MAX + RESSENTI changer API ? -->
      <span> {{  }} </span>
      <span> {{  }} </span>
    </div>

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
        second: 'numeric'
      });
      return dateLocale.substring(0,20) + ' ' +dateLocale.substring(28,33);
    }

  }
}
</script>

<style>
#global_info {
  border: 2px solid grey;
  border-radius: 20px
}

</style>
