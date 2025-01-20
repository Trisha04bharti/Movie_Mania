import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "172371927750d25606866daf990a77e4",
  },
});

export default api;
