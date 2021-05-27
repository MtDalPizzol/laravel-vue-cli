import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
  data () {
    return {
      page: window.app.page.data
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
