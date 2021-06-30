import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru'
Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { ru },
        current: 'ru',
    },
    theme: {
        themes: {
            light: {
                primary: '#1C2D52',
                secondary: '#076FBD',
                accent: '#0D456B',
                success: '#43a047',
                error: '#d32f2f'
            },
        },
    }
});
