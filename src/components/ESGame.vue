<template>
  <div v-if="currentGame" class="edit-form">
    <h4>Elder-Scrolls-Game</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="currentGame.title" />
      </div>
      <div class="form-group">
        <label for="popularity">Popularity</label>
        <input type="text" class="form-control" id="popularity" v-model="currentGame.popularity" />
      </div>
      <div class="form-group">
        <label for="releaseYear">Release Year</label>
        <input
          type="number"
          class="form-control"
          id="releaseYear"
          v-model="currentGame.releaseYear"
        />
      </div>
      <div class="form-group">
        <label for="completionHours">Completion Hours</label>
        <input
          type="number"
          class="form-control"
          id="completionHours"
          v-model="currentGame.completionHours"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2" @click="deleteGame">Delete</button>
    <button type="submit" class="badge badge-success" @click="updateGame">Update</button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Game!</p>
  </div>
</template>

<script>
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'esgames',
  data() {
    return {
      currentGame: null,
      message: ''
    }
  },
  methods: {
    getGame(id) {
      GameDataService.get(id)
        .then((response) => {
          this.currentGame = response.data
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateGame() {
      GameDataService.update(this.currentGame.id, this.currentGame)
        .then((response) => {
          console.log(response.data)
          this.message = 'Game succesfully updated!'
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteGame() {
      GameDataService.delete(this.currentGame.id)
        .then((response) => {
          console.log(response.data)
          this.$router.push({ name: 'esgames' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted() {
    ;(this.message = ''), this.getGame(this.$route.params.id)
  }
}
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
