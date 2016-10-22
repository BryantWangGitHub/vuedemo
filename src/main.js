import Vue from 'vue'
import App from './App'
import router from './AppRouter'
import Element from 'element-ui'
import vueResource from 'vue-resource'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
Vue.use(vueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
// const app = new Vue({
//   router
// }).$mount('#app')
