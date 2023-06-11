import React, { useContext } from 'react';
import { TextInput, View } from 'react-native';
import { PingMeContext, STORE_ACTIONS } from '../../global.constants';
import apiClient from '../../utils/apiClient';
import Button from '../Button';

function LoginScreen() {
  const { store, dispatch } = useContext(PingMeContext);

  const { loginEmail, otp } = store;

  const sendOTPRequest = async () => {
    try {
      const data = await apiClient.post('http://localhost:5001/login', {
        email: loginEmail,
      });

      console.log(data);
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
          dispatch({ type: STORE_ACTIONS.UPDATE_LOGIN_EMAIL, nextLoginEmail: newText })
        }
        value={loginEmail}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={newText => dispatch({ type: STORE_ACTIONS.UPDATE_OTP, nextOtp: newText })}
        value={otp}
        editable={false}
      />
      <Button label="submit" onPress={sendOTPRequest} />
    </View>
  );
}

export default LoginScreen;
