import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const state = {
	newGames: []
}

const mutations = {
	'SET_NEW_GAMES' (state, payload) {
		state.newGames = payload;
	}
};


const actions = {
	'SET_NEW_GAMES': ({
		commit
	}) => {

		Vue.http.get(`http://starlord.hackerearth.com/gamesarena`)
			.then(response => {
				commit('SET_NEW_GAMES', response.data);
			});
	}
};

const getters = {
	newGames: state => {
		return state.newGames;
	}
};

export default {
	state,
	mutations,
	getters,
	actions
};
