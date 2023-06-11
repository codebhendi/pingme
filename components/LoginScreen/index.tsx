import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN, PingMeContext } from '../../global.constants';
import apiClient from '../../utils/apiClient';
import Button from '../Button';
import { STORE_ACTIONS } from '../../types';

const LoginScreen: React.FC = () => {
  const { store, dispatch } = useContext(PingMeContext);

  const { loginEmail, otp, readyForOtp } = store;

  const sendEmailRequest = async () => {
    try {
      const { data } = await apiClient.post('/login', {
        email: loginEmail.trim(),
      });

      if (data.success) {
        dispatch({ type: STORE_ACTIONS.READY_FOR_OTP });
      }
    } catch (e) {
      console.error(e);
    }
  };

  const sendOTPRequest = async () => {
    try {
      const { data } = await apiClient.post('/verify-auth-otp', {
        email: loginEmail.trim(),
        otp: otp.trim(),
      });

      console.log(data);

      if (data.token) {
        AsyncStorage.setItem(AUTH_TOKEN, data.token);
        dispatch({ type: STORE_ACTIONS.UPDATE_LOGIN_DONE, payload: { token: data.token } });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Email"
        onChangeText={newText =>
          dispatch({ type: STORE_ACTIONS.UPDATE_LOGIN_EMAIL, payload: { loginEmail: newText } })
        }
        value={loginEmail}
        editable={!readyForOtp}
      />
      {readyForOtp && (
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={newText =>
            dispatch({ type: STORE_ACTIONS.UPDATE_OTP, payload: { otp: newText } })
          }
          value={otp}
        />
      )}
      <Button
        label={readyForOtp ? 'submit otp' : 'submit email'}
        onPress={readyForOtp ? sendOTPRequest : sendEmailRequest}
      />
    </View>
  );
};

export default LoginScreen;
