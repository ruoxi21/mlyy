import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'

import './assets/css/index.css'

import mlyy from './assets/js/mlyy'
import createHearts from './assets/js/createHearts'

Vue.use( VueLazyload, {
  preLoad: 1.3,
  error: '/mlyy/imgs/error.jpg',
  loading: '/mlyy/imgs/loading.gif',
  attempt: 1
} )

Vue.use( mlyy )
Vue.use( createHearts )

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
