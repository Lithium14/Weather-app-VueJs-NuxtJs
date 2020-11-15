<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-btn dark icon v-on="on">
        <v-avatar size="35">
          <img :src=" '/lang/' + $i18n.locale + '.png'" alt='lang'>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for='(locale, i) in otherLocales' :key='i' @click='switchLang(locale)'>
        <v-avatar size="35">
          <img :src=" '/lang/' + locale + '.png'" alt='lang'>
        </v-avatar>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  computed: {
    otherLocales () {
      return this.$i18n.locales.filter(locale => locale !== this.$i18n.locale)
    }
  },
  methods: {
    switchLang (locale) {
      this.$i18n.locale = locale
    }
  }
}
</script>
