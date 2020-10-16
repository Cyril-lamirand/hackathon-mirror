import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import moment from 'moment'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.prototype.moment = moment

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue Particles
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
