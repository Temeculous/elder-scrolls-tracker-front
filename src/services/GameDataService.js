import http from '../http-common.js'

class GameDataService {
  getAll() {
    return http.get('/')
  }

  get(id) {
    return http.get(`/${id}`)
  }

  create(data) {
    return http.post('/', data)
  }

  update(id, data) {
    return http.put(`/${id}`, data)
  }

  delete(id) {
    return http.delete(`/${id}`)
  }

  deleteAll() {
    return http.delete('/')
  }

  findByTitle(title) {
    return http.get(`/?=${title}`)
  }
}

export default new GameDataService()
