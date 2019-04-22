import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
