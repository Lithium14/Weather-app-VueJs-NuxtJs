export const state = () => ({
  snackbar: false,
  notification: '',
  type: 1
})

export const mutations = {
  addNotif (state, { notif, types, snackbar }) {
    state.snackbar = snackbar || true
    state.notification = notif || ''
    state.type = types || 1
  },
  closeNotif (state) {
    state.snackbar = !state.snackbar
  }
}
