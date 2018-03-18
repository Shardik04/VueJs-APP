import Vue from 'vue';
import axios from 'axios'

module.exports = {
  state: {
    newGames: []
  },
  mutations: {
    'SET_NEW_GAMES' (state, payload) {
      state.newGames = payload;
    }
  },
  actions: {
    'SET_NEW_GAMES': ({
      commit
    }) => {

      return axios.get(`http://starlord.hackerearth.com/kickstarter`)
        .then((response) => {
          if (response.status == 200) {
            console.log(response);
            commit('SET_NEW_GAMES', response.data)
          }
        }).catch((error) => {
          console.log(error)
        })

    }
  },
  getters: {
    newGames: state => {
      return state.newGames;
    }
  }
};
