import fr from './locales/fr.json';
import en from './locales/en.json';

const locales = ['fr', 'en']

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - weatherApp',
    title: 'weatherApp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  env: {
    weatherApiKey: '5fd86de924230b9904fe00b8cd701784'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  i18n: {
    locales,
    defaultLocale: 'fr',
    DetectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        fr,
        en
      }
    }
  },
  axios: {
    proxy: true
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    optionsPath: './vuetify.options.js',
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
