import Vue from 'vue'
import Vuex from 'vuex'
import router from './router.js'
import store from './store'
import VueResource from 'vue-resource'

import './filters.js'
import Mixins from './mixins.js'
Vue.mixin(Mixins)
Vue.use(VueResource)

import App from './App.vue'

var vue = new Vue({
  el: '#vue-app',
  router,
  store,
  template: '<App/>',
  mixins: [Mixins],
  components: { App }
})

