import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  
});

axiosClient.interceptors.request.use(
  function (config) {
    config.params = config.params || {};
    config.params['api_key'] = process.env.REACT_APP_API_KEY;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
