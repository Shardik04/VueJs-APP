import Vue from 'vue';
import Vuex from 'vuex';
import newModule from './modules/new'

Vue.use(Vuex);

export function createStore() {

  return new Vuex.Store({
    modules: {
      New: newModule,
    }
  })
}
