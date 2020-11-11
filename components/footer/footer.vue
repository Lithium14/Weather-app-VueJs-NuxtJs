<template>
  <v-card height="100px">
    <v-footer v-bind="localAttrs" :padless="padless" >
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
          <v-btn class="mx-4" icon>
            <v-icon size="24px">
              $mdi-facebook
            </v-icon>
          </v-btn>

          <v-btn class="mx-4" icon>
            <v-icon size="24px">
              $mdi-github
            </v-icon>
          </v-btn>

          <v-btn class="mx-4" icon>
            <v-icon size="24px">
              $mdi-linkedin
            </v-icon>
          </v-btn>

          <v-btn class="mx-4" icon>
            <v-icon size="24px">
              $mdi-facebook
            </v-icon>
          </v-btn>
        </v-card-text>


        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Fadi RATA</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
