import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.min.css'
import PortalVue from 'portal-vue'
import VueParticles from 'vue-particles'
import '@/assets/scss/base.scss'

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.use(PortalVue)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
