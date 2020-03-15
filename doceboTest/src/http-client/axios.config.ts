import axios from 'axios';

enum ENDPOINT {
  GIT = 'https://api.github.com',
}

const axiosRequest = () => {
  return axios.create({
    baseURL: ENDPOINT.GIT,
    headers: {
      'Authorization':'0830d3e627454ef223b813ea18dd2ae5eb5e3250'
    }
  });
};

export default axiosRequest;
