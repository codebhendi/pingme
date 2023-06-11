import { GlobalStateType, STORE_ACTIONS } from "../types";

export function reducerFunction(state: GlobalStateType, action: {
  type: STORE_ACTIONS;
  payload?: Partial<GlobalStateType>
}): GlobalStateType {
  const { type, payload } = action;
  switch (type) {
    case STORE_ACTIONS.UPDATE_LOGIN_EMAIL:
      return {
        ...state,
        loginEmail: payload?.loginEmail || '',
      };
    case STORE_ACTIONS.UPDATE_OTP:
      return {
        ...state,
        otp: payload?.otp || '',
      };
    case STORE_ACTIONS.READY_FOR_OTP:
      return {
        ...state,
        readyForOtp: true,
      };
    case STORE_ACTIONS.UPDATE_LOGIN_DONE:
      return {
        ...state,
        userLoggedIn: true,
        readyForOtp: false,
        token: payload?.token || '',
      };
    default:
      return state;
  }
}
