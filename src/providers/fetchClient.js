import axios from 'axios'

const defaultOptions = {
  baseURL: process.env.REACT_APP_API_URL
}

const instance = axios.create(defaultOptions)

export default instance
