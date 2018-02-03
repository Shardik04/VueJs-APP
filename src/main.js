import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import {
  createRouter
} from './router/router.js'

import {
  createStore
} from './store/store'

import {
  sync
} from 'vuex-router-sync'

// export a factory function for creating fresh app, router and store
// instances
export function createApp() {

  // create router instance
  const router = createRouter();
  const store = createStore()

  // sync so that route state is available as part of the store
  sync(store, router)

  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
  return {
    app,
    router,
    store
  };
}
