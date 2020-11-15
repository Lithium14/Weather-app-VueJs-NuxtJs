<template>
  <v-snackbar v-model="snackbar"
    :bottom="x === 0"
    :top="x ===1 "
    :right="y === 0"
    :left='y === 1'
    :color="color"
    :timeout="timeout"
    shaped
    class="snack"
  > {{ $store.state.notif.notification }}
    <v-btn dark text @click="closeSnackbar">
      {{ $t('snackbar.close') }}
    </v-btn>

  </v-snackbar>
</template>

<script>
export default {
  data () {
    return {
      mode: '',
      text: '',
      x: null,
      y: '',
      timeout: 6000,
      colorsList: [
        { id: 1, color: 'red' },
      ]
    }
  },
  computed: {
    snackbar: {
      get () {
        return this.$store.state.notif.snackbar
      },
      set () {
        this.$store.commit('notif/closeNotif')
      }
    },
    color () {
      return this.colorsList.find(x => x.id === this.$store.state.notif.type).color
    }
  },
  methods: {
    closeSnackbar () {
      this.$store.commit('notif/closeNotif')
    }
  }
}
</script>

<style scoped>

</style>
