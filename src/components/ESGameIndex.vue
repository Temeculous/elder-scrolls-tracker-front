<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Elder Scrolls Games</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(esgames, index) in esgames"
          :key="index"
          @click="setActiveGame(esgames, index)"
        >
          {{ esgames.title }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="deleteAllGames()">Delete All</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentGame">
        <h4>Game Details</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentGame.title }}
        </div>
        <div>
          <label><strong>Popularity:</strong></label> {{ currentGame.popularity }}
        </div>
        <div>
          <label><strong>Release Year:</strong></label> {{ currentGame.releaseYear }}
        </div>
        <div>
          <label><strong>Completion Hours:</strong></label> {{ currentGame.completionHours }}
        </div>
        <router-link :to="'/ESGames/' + currentGame.id" class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Game</p>
      </div>
    </div>
  </div>
</template>

<script>
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'ESGames-index',
  data() {
    return {
      esgames: [],
      currentGame: null,
      currentIndex: -1,
      title: ''
    }
  },
  methods: {
    retrieveGames() {
      GameDataService.getAll()
        .then((response) => {
          this.esgames = response.data
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    refreshGames() {
      this.retrieveGames()
      this.currentGame = null
      this.currentIndex = -1
    },
    setActiveGame(esgame, index) {
      this.currentGame = esgame
      this.currentIndex = esgame ? index : -1
    },
    removeAllGames() {
      GameDataService.deleteAll()
        .then((response) => {
          console.log(response.data)
          this.refreshGames()
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    this.retrieveGames()
  }
}
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
