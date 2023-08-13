import http from '../http-common.js'

class GameDataService {
  getAll() {
    return http.get('/api/ESGames')
  }

  get(id) {
    return http.get(`/api/ESGames/${id}`)
  }

  create(data) {
    return http.post('/api/ESGames', data)
  }

  update(id, data) {
    return http.put(`/api/ESGames/${id}`, data)
  }

  delete(id) {
    return http.delete(`/api/ESGames/${id}`)
  }

  deleteAll() {
    return http.delete('/api/ESGames')
  }

  findByTitle(title) {
    return http.get(`/api/ESGames?=${title}`)
  }
}

export default new GameDataService()
