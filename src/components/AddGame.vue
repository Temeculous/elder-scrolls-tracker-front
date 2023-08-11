<template>
  <div>Test</div>
  <p>There will be a form here!</p>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="esgame.title"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="popularity">Popularity</label>
        <input
          type="text"
          class="form-control"
          id="popularity"
          required
          v-model="esgame.popularity"
          name="popularity"
        />
      </div>
      <div class="form-group">
        <label for="releaseYear">Release Year</label>
        <input
          type="number"
          class="form-control"
          id="releaseYear"
          v-model="esgame.releaseYear"
          name="releaseYear"
        />
      </div>
      <button @click="saveGame" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>Submitted Succesfully!</h4>
      <button class="btn btn-success" @click="newGame">Add</button>
    </div>
  </div>
</template>

<script>
import GameDataService from '../services/GameDataService.js'

export default {
  name: 'add game',
  data() {
    return {
      esgame: {
        id: null,
        title: '',
        popularity: '',
        releaseYear: 0
      },
      submitted: false
    }
  },
  methods: {
    saveGame() {
      let data = {
        title: this.esgame.title,
        popularity: this.esgame.popularity,
        releaseYear: this.esgame.releaseYear
      }

      GameDataService.create(data)
        .then((response) => {
          this.esgame.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newGame() {
      this.submitted = false
      this.esgame = {}
    }
  }
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
