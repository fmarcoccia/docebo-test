import axios, {AxiosRequestConfig} from 'axios';

const axiosRequest = (config?: AxiosRequestConfig) => {
  return axios.create(config);
};

export default axiosRequest;
