import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css'
import router from './router'

import store from './store'

Vue.config.productionTip = false

// console.log(store)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
