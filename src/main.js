import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes.js' 
import store from './store/store'

Vue.use(VueRouter);

Vue.filter('time', (value) => {
  let today = new Date();
	let date_to_reply = new Date(value);
	let timeinmilisec = today.getTime() - date_to_reply.getTime();
	let t = Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24));
  return t + ' Days';
});

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

