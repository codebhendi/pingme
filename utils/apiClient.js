import axios from 'axios';
import applyConverters from 'axios-case-converter';

const apiClient = applyConverters(axios.create());

// ERROR COLLECTOR V2
export const parseErrorCodeV2 = error => {
  if (error.response) {
    if (error.response.status === 401) {
      // error handling here
      // TODO: Enhace this in future with new conditions
      // Router.push(AUTH_ROUTE.LOGIN);
      console.error(error);
    }
  }
  return Promise.reject(error.response ?? error);
};

// Request parsing interceptor
export const requestInterceptor = config => {
  const newConfig = { ...config };
  if (!config.baseURL) {
    newConfig.baseURL = window.location.origin;
  }

  if (!Object.keys(config.headers).includes('Authorization')) {
    newConfig.headers = {
      Authorization: window.localStorage.getItem('auth_token'),
    };
  }

  return newConfig;
};

// Request parsing interceptor
apiClient.interceptors.request.use(requestInterceptor, error => {
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
