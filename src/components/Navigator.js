import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginView from '../views/LoginView';
import ProjectsView from '../views/ProjectsView';

const Stack = createStackNavigator();

const Navigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: styles.background.backgroundColor },
        }}
      >
        {token ? <Stack.Screen name="Projects" component={ProjectsView} /> : <Stack.Screen name="Login" component={LoginView} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#0C1722',
  },
});
