import App from './app.vue'
import './assets/stylus/global.styl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import Vuex from 'vuex'
import createStore from './store'

Vue.use(VueRouter)
const router = createRouter()

Vue.use(Vuex)
const store = createStore()

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
