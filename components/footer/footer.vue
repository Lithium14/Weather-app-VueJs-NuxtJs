<template>
  <v-card height="100px">
    <v-footer>
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <img src="/rain.jpg" width="500px" height="150px">
        <v-card-text>

          <v-btn class="mx-4" icon href="https://github.com/Lithium14">
            <v-icon size="24px">
              $mdi-github
            </v-icon>
          </v-btn>

          <v-btn class="mx-4" icon href="https://www.linkedin.com/in/fadi-rata/">
            <v-icon size="24px">
              $mdi-linkedin
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
