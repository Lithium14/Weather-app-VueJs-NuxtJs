<template>
  <div>
    <v-text-field dense placeholder="SEARCH" v-model="searchCity" @keyup.enter="$emit('onsearch-city', searchCity)">
    </v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchCity: ''
    }
  },
}
</script>
