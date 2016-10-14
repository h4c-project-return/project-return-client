import Vue from 'vue'
import App from './App.vue'

import store from './store.js'
import router from './router.js'

store.dispatch("fetchCriteria")
store.dispatch("fetchOpps")

new Vue({
  el: '#app',
    render: h => h(App),
    store,
    router
})
