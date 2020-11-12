import colors from 'vuetify/es5/util/colors'
import { mdiFacebook, mdiGithub, mdiLinkedin, mdiMapMarker, mdiTwitter} from '@mdi/js'
export default {
  breakpoint: {
    thresholds:{},
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3,
      },
    },
  },
  icons:{
    values: {
      'mdi-facebook': mdiFacebook,
      'mdi-github': mdiGithub,
      'mdi-linkedin': mdiLinkedin,
      'mdi-mapMarker': mdiMapMarker,
      'mdi-twitter': mdiTwitter
    }
  },
};
