import axios from 'axios'

export default axios.create({
  baseURL: 'https://elder-scrolls-tracker-back-a2b1e22157dd.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})
