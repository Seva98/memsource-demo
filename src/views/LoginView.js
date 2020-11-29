import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';

const LoginView = () => {
  return (
    <View style={styles.container}>
      <Logo style={styles.text} />
      <LoginForm style={styles.form} />
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    width: '100%',
    height: 30,
    marginVertical: 30,
  },
  form: {
    width: '100%',
    flex: 1,
    backgroundColor: 'red',
  },
});
