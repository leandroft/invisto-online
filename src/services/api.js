import axios from 'axios';

const api = axios.create({
  baseURL: 'https://invisto-online-backend.herokuapp.com',
})

export default api;