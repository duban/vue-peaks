import Vue from 'vue'

import store from './store/index.js'
import App from './App.vue'
import router from './router'

new Vue({
  store,
  components: { App },
  router,
  render: (createElement) => createElement(App)
}).$mount('#app')
