import { useMemo, useReducer } from 'react';
import { View } from 'react-native';

import LoginScreen from '../components/LoginScreen';
import { PingMeContext, STORE_ACTIONS } from '../global.constants';

function reducerFunction(state, action) {
  console.log(action.nextLoginEmail, action.type === STORE_ACTIONS.UPDATE_LOGIN_EMAIL, action);
  switch (action.type) {
    case STORE_ACTIONS.UPDATE_LOGIN_EMAIL:
      return {
        ...state,
        loginEmail: action.nextLoginEmail,
      };
    case STORE_ACTIONS.UPDATE_OTP:
      return {
        ...state,
        otp: action.nextOtp,
      };
    default:
      return state;
  }
}

export default function App() {
  const [store, dispatch] = useReducer(reducerFunction, {
    loginEmail: '',
  });

  const contextValues = useMemo(
    () => ({
      store,
      dispatch,
    }),
    [store, dispatch]
  );

  console.log(store);

  return (
    <PingMeContext.Provider value={contextValues}>
      <View>
        <LoginScreen />
      </View>
    </PingMeContext.Provider>
  );
}
