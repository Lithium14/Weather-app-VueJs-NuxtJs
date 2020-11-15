<template>
  <v-app id="app">
    <v-main>
      <nuxt />
      <Snackbar />
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from '@/components/footer/footer.vue'
import Snackbar from '../components/snackbar.vue'
export default {
  components: { Footer, Snackbar },
}
</script>

<style scoped>
#app {
  background: linear-gradient(
    to right bottom,
    #051937,
    #3f4964,
    #788094,
    #b6bbc6,
    #f8f9fb
  );
  font-family: 'Maven Pro';
}
</style>
