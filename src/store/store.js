import Vue from 'vue';
import Vuex from 'vuex';
import New from './modules/new'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		New
	}
});
