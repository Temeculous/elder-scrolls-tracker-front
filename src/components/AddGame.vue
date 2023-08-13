<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="esgames.title"
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
          v-model="esgames.popularity"
          name="popularity"
        />
      </div>
      <div class="form-group">
        <label for="releaseYear">Release Year</label>
        <input
          type="number"
          class="form-control"
          id="releaseYear"
          v-model="esgames.releaseYear"
          name="releaseYear"
        />
      </div>
      <div class="form-group">
        <label for="completionHours">Completion Hours</label>
        <input
          type="number"
          class="form-control"
          id="completionHours"
          v-model="esgames.completionHours"
          name="completionHour"
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
  name: 'add-game',
  data() {
    return {
      esgames: {
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
        title: this.esgames.title,
        popularity: this.esgames.popularity,
        releaseYear: this.esgames.releaseYear,
        completionHours: this.esgames.completionHours
      }

      GameDataService.create(data)
        .then((response) => {
          this.esgames.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch((err) => {
          console.log(err)
        })
    },
    newGame() {
      this.submitted = false
      this.esgames = {}
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
