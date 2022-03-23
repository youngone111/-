import axios from 'axios';

let baseUrl = window._CONFIG['domain'];
const service = axios.create({
  baseURL: baseUrl,
  timeout: 10000
});

service.interceptors.request.use(config => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    config.headers['X-Access-Token'] = token; // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

service.interceptors.response.use((response) => {
  return response.data;
});

export { service as axios };
