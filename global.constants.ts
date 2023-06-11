import { createContext } from 'react';
import { GlobalStateType, STORE_ACTIONS } from './types';

export const PingMeContext = createContext<Partial<{
  store: GlobalStateType;
  dispatch: (action: { type: STORE_ACTIONS; payload?: Partial<GlobalStateType>}) => void;
}>>({});

export const AUTH_TOKEN = 'auth_token';

export const BASE_STATE_INIT = {
  loginEmail: '',
  readyForOtp: false,
  userLoggedIn: false,
  token: '',
  otp: '',
}
