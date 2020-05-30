import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0b9dcd',
        darkGray: '#2A2D30',
        darkBlue: '#3A899A',
        error: '#FF5252',
        black: '#000000',
        gray: '#2b2b2b',
        white: '##ffffff'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'md',
  },
});
