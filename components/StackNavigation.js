import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import TabNavigation from './TabNavigation';
import {useSelector} from 'react-redux';
import {selectUserLoginState} from '../redux/selectors';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  const isLoggedin = useSelector(selectUserLoginState);

  return (
    <Stack.Navigator initialRouteName={isLoggedin ? 'App' : 'Login'}>
      <Stack.Screen
        options={{headerTitle: 'Welcome'}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="App"
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
}
