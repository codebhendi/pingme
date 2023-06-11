import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import applyConverters from 'axios-case-converter';

const apiClient = applyConverters(axios.create());

// ERROR COLLECTOR V2
export const parseErrorCodeV2 = (error: AxiosError) => {
  if (error.response) {
    if (error.response.status === 401) {
      console.error(error);
    }
  }
  return Promise.reject(error.response ?? error);
};

// Request parsing interceptor
export const requestInterceptor = (config:AxiosRequestConfig): AxiosRequestConfig => {
  const newConfig = { ...config };
  if (!config.baseURL) {
    newConfig.baseURL = 'http://192.168.1.4:5001';
  }

  // if (!Object.keys(config.headers).includes('Authorization')) {
  //   newConfig.headers = {
  //     Authorization: window.localStorage.getItem('auth_token'),
  //   };
  // }

  return newConfig;
};

// Request parsing interceptor
apiClient.interceptors.request.use(requestInterceptor as any, error => {
  console.error('[REQUEST_ERROR]', error);
});

// Response parsing interceptor
apiClient.interceptors.response.use(
  response => response,
  error => {
    return parseErrorCodeV2(error);
  }
);

export default apiClient;
