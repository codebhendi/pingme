import { useMemo, useReducer, useEffect, useCallback } from 'react';
import { View } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../containers/LoginScreen';
import { AUTH_TOKEN, BASE_STATE_INIT, PingMeContext } from '../global.constants';
import { reducerFunction } from '../utils';
import { STORE_ACTIONS } from '../types';
import StatusScreen from '../containers/StatusScreen';

const App: React.FC = () => {
  const [store, dispatch] = useReducer(reducerFunction, BASE_STATE_INIT);

  const contextValues = useMemo(
    () => ({
      store,
      dispatch,
    }),
    [store, dispatch]
  );
  const checkAuthToken = useCallback(async () => {
    const data = await AsyncStorage.getItem(AUTH_TOKEN);
    if (data) {
      dispatch({
        type: STORE_ACTIONS.UPDATE_LOGIN_DONE,
        payload: {
          token: data,
        },
      });
    }
  }, []);

  useEffect(() => {
    checkAuthToken();
  }, [checkAuthToken]);

  return (
    <PingMeContext.Provider value={contextValues}>
      <View>{store.userLoggedIn ? <StatusScreen /> : <LoginScreen />}</View>
    </PingMeContext.Provider>
  );
};

export default App;
