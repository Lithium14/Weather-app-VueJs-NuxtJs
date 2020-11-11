<template>
  <v-app id="app">
    <nuxt />
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from '@/components/footer/footer.vue'
export default {
  components: { Footer },
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
}
</style>
