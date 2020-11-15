<template>
  <v-container class="pa-0">
    <v-footer fluid>
      <v-card
        flat
        tile
        width="100%"
        class="text-center"
      >
        <img src="/rain.jpg" width="300px" height="100px">
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
          {{ new Date().getFullYear() }} — <strong>Copyright Ⓒ 2020 Fadi RATA. All Rights Reserved</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>
