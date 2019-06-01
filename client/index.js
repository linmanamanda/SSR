import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router.js'
import App from './app.vue'
import './assets/stylus/global.styl'

Vue.use(VueRouter)
const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#root')
