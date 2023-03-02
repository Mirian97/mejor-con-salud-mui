import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})
