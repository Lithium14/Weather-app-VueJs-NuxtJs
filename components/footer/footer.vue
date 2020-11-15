<template>
  <v-container class="pa-0">
    <v-footer >
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <img src="/rain.jpg" :width='resizeImage.imgWidth' :height='resizeImage.imgHeight'>
        <v-card-text class="pa-0">
          <v-btn class="mx-4" icon href="https://github.com/Lithium14">
            <v-icon size="30px">
              $mdi-github
            </v-icon>
          </v-btn>
          <v-btn class="mx-4" icon href="https://www.linkedin.com/in/fadi-rata/">
            <v-icon size="30px">
              $mdi-linkedin
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text text-center">
          {{ new Date().getFullYear() }} — <strong>{{ $t('footer.copyright') }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  computed: {
    resizeImage() {
      const result = {}
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          result.imgWidth = '150px'
          result.imgHeight = '150px'
        case 'sm':
          result.imgWidth = '350px'
          result.imgHeight = '150px'

          break
        case 'md':
          result.imgWidth = '600px'
          result.imgHeight = '150px'

          break
        case 'lg':
          result.imgWidth = '800px'
          result.imgHeight = '150px'
          break
        case 'xl':
          result.imgWidth = '800px'
          result.imgHeight = '150px'
          break
      }
      return {
        imgWidth: result.imgWidth,
        imgHeight: result.imgHeight,
      }

    },
  }
}
</script>
