import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export default boot(({ app }) => {
  api.interceptors.request.use((request) => {
    return request;
  });

  api.interceptors.response.use(
    (response) => {
      if (response.data.errorMessage) {
        return Promise.reject(response);
      }
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
});

export { api };
