import { createStore } from 'vuex';

const store = createStore({
    state: {
        players: [],
    },
    mutations: {
        setPlayers(state, players) {
            state.players = players;
        },
        addPlayer(state, player) {
            state.players.push(player);
        },
        updatePlayerGuess(state, { playerId, guess }) {
            const player = state.players.find(p => p.id === playerId);
            if (player) {
                player.guess = guess;
            }
        },
        incrementPlayerScore(state, playerId) {
            const player = state.players.find(p => p.id === playerId);
            if (player) {
                player.score += 1;
            }
        },
    },
    actions: {
        updatePlayers({ commit }, players) {
            commit('setPlayers', players);
        },
        addNewPlayer({ commit }, player) {
            commit('addPlayer', player);
        },
        updateGuess({ commit }, payload) {
            commit('updatePlayerGuess', payload);
        },
        incrementScore({ commit }, playerId) {
            commit('incrementPlayerScore', playerId);
        },
    },
});

export default store;