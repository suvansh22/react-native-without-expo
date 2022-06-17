import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigation from './components/StackNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <LoginNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  label: {
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
  },
});
