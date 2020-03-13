import axiosRequest from './axios.config';

const getUsers = (searchString: string) => {
  return axiosRequest({
    baseURL: 'https://api.github.com',
    method: 'GET',
  }).get('/search/users?q=' + searchString);
  // return getUsers('fabio').get()
};

const gitServices = {
  getUsers,
};

export default gitServices;
