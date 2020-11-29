import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';
import Navigator from './src/components/Navigator';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <SafeAreaView style={styles.background} />
          <Navigator />
        </View>
      </ActionSheetProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1722',
  },
  background: {
    backgroundColor: '#0C1722',
  },
});
