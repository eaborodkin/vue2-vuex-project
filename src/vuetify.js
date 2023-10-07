import Vue from 'vue'
import Vuetify from 'vuetify'
import 'mdi/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
        },
    },
}

export default new Vuetify(opts)