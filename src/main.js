import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'

import router from './router'

Vue.config.productionTip = false

// Vue Particles
Vue.use(VueParticles)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
