import http from '../http-common.js'

class GameDataService {
  getAll() {
    return http.get('/ESGames')
  }

  get(id) {
    return http.get(`/ESGames/${id}`)
  }

  create(data) {
    return http.post('/ESGames', data)
  }

  update(id, data) {
    return http.put(`/ESGames/${id}`, data)
  }

  delete(id) {
    return http.delete(`/ESGames/${id}`)
  }

  deleteAll() {
    return http.delete('/ESGames')
  }

  findByTitle(title) {
    return http.get(`/ESGames?=${title}`)
  }
}

export default new GameDataService()
