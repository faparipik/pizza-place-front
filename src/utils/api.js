import axios from 'axios';

const { REACT_APP_API_URL: API_URL = 'http://localhost:5000' } = process.env;

const defaults = {
  baseURL: API_URL,
  headers: () => ({
    'Content-Type': 'application/json',
  }),
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

const api = (method, url, variables) => new Promise((resolve, reject) => {
  axios({
    url: `${defaults.baseURL}${url}`,
    method,
    headers: defaults.headers(),
    params: method === 'get' ? variables : undefined,
    data: method !== 'get' ? variables : undefined,
  }).then(
    (response) => {
      resolve(response.data);
    },
    () => {
      reject(defaults.error);
    },
  );
});

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};
