import axios from 'axios'

axios.defaults.baseURL = 'http://api.duyiedu.com';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.params = {
        ...config.params,
        appkey: "jingshuyan_1560065464918"
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export default axios;