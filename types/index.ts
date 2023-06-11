export type GlobalStateType = {
  userLoggedIn: boolean;
  readyForOtp: boolean;
  token: string;
  otp: string;
  loginEmail: string;
}

export enum STORE_ACTIONS {
  UPDATE_LOGIN_EMAIL = 'UPDATE_LOGIN_EMAIL',
  UPDATE_OTP = 'UPDATE_OTP',
  READY_FOR_OTP = 'READY_FOR_OTP',
  UPDATE_LOGIN_DONE = 'UPDATE_LOGIN_DONE',
};