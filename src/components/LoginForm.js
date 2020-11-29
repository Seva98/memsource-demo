import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, TextInput, Button, Text, ActivityIndicator } from 'react-native';
import DismissKeyboardView from '../components/DismissKeyboardView';
import axios from 'axios';
import { API_URL } from '../constants';

const LoginForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);

  const loginTapped = async () => {
    setLoading(true);
    try {
      const response = await axios.post(API_URL + '/api2/v1/auth/login', {
        userName,
        password,
      });
      if (response.status === 200) {
        const { token } = response.data;
        dispatch({ type: 'SET_TOKEN', payload: { token } });
      }
    } catch (error) {
      setError(error.response.data.errorDescription);
    }
    setLoading(false);
  };

  const dispatch = useDispatch();

  return (
    <DismissKeyboardView style={styles.container}>
      <TextInput
        style={[styles.size, styles.textInput]}
        onChangeText={(newUserName) => setUserName(newUserName)}
        placeholderTextColor="lightgray"
        placeholder="Username"
        autoCorrect={false}
        returnKeyType="next"
        textContentType="username"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.size, styles.textInput]}
        onChangeText={(newPassword) => setPassword(newPassword)}
        placeholderTextColor="lightgray"
        placeholder="Password"
        autoCorrect={false}
        returnKeyType="done"
        secureTextEntry
        textContentType="password"
      />
      {loading ? <ActivityIndicator /> : <Button onPress={() => loginTapped()} style={[styles.size, styles.button]} title="Login"></Button>}
      {error && <Text style={[styles.size, styles.error]}>Error: {error}</Text>}
    </DismissKeyboardView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 90,
  },
  textInput: {
    borderColor: '#DDE2E6',
    borderWidth: StyleSheet.hairlineWidth,
    color: 'white',
    padding: 8,
  },
  size: {
    height: 40,
    width: '80%',
    maxWidth: 400,
    margin: 10,
  },
  error: {
    color: '#F41B2D',
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
  },
});
