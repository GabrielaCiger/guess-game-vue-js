<script>
export default {
  data() {
    return {
      playerNumber: 1,
      players: [{ name: "", submitted: false }],
      playersList: []
    };
  },
  watch: {
    playerNumber(newVal) {
      this.updatePlayers(newVal);
    }
  },
  methods: {
    updatePlayers(numPlayers) {
      const newPlayers = [];
      for (let i = 0; i < numPlayers; i++) {
        newPlayers.push(this.players[i] || { name: "", submitted: false });
      }
      this.players = newPlayers;
    },
    submitPlayer(index) {
      const player = this.players[index];
      if (player.name && !player.submitted) {
        this.playersList.push({ id: index + 1, name: player.name, currentGuess : 0, score : 0 });
        player.submitted = true;
      }
      console.log(this.playersList);
    }
  },
  computed : {
    allPlayersReady () {
      return this.players.every(player => player.submitted);
    }
  }
};
</script>

<template>
  <h1>New game</h1>
  <div>
    <label for="playerNumber">Number of players: </label>
    <input type="range" id="playerNumber" name="playerNumber" min="1" max="5" step="1" v-model="playerNumber" />
    <label>{{ playerNumber }}</label>
  </div>
  <div class="player-container">
  <div v-for="(player, index) in players" :key="index">
    <div v-if="!player.submitted" class="player-card-notReady">
      <form @submit.prevent="submitPlayer(index)">
        <h3>Player n.{{ index + 1 }}</h3>
        <label for="playerName">Name:</label>
        <input type="text" v-model="player.name" placeholder="Enter player name" required />
        <button type="submit" class="button">Ready!</button>
      </form>
    </div>
    <div v-else class="player-card-ready">
      <img :src="require(`@/assets/img/cat-${index + 1}.png`)" alt="cat avatar">
      <h3>{{ player.name }}</h3>
      <p>Player n.{{index + 1}}</p>
    </div>
  </div>
  </div>
  <div v-if="allPlayersReady">
    <a class="button" href="/startGame">Start game!</a>
  </div>
</template>

<style scoped>

body {
  font-family: Roboto, sans-serif;
}

h1 {
  font-family: "Silkscreen", sans-serif;
  color: #2E4374;
}

.player-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.player-card-notReady, .player-card-ready {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 25vh;
  box-sizing: border-box;
  text-align: center;
}

.player-card-ready {
  background-color: #8eda85;
}

.player-card-ready h3 {
  color: #31743e;
}

.player-card-ready img {
  height: 10vh;
}


.button {
  font-family: "Silkscreen", sans-serif;
  background-color: #2E4374;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>

