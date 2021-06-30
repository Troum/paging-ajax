import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify.plugin'

import './bootstrap/plugins.bootstrap'
import './bootstrap/components.bootstrap'
import './vee-validate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
