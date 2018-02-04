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

Vue.mixin({
  beforeMount() {
    const {
      asyncData
    } = this.$options
    if (asyncData) {
      // assign the fetch operation to a promise
      // so that in components we can do `this.dataPromise.then(...)` to
      // perform other tasks after data is ready
      console.log('fetch operation to a promise');
      this.dataPromise = asyncData({
        store: this.$store,
        route: this.$route
      })
    }
  }
})


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
