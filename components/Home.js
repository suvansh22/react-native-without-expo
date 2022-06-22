import React from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from 'react-native';
import {useDispatch} from 'react-redux';
import {actions} from '../redux/userInfoReducer';
import Config from 'react-native-config';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const {clearUserInfo} = actions;
  const handleLogout = () => {
    dispatch(clearUserInfo());
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text>You are in {Config.env} env!!</Text>
      <Text>Your are logged in!</Text>
      <TouchableHighlight
        underlayColor={'#47B5FF'}
        onPress={handleLogout}
        activeOpacity={0.6}
        style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  button: {
    marginTop: 16,
    padding: 10,
    backgroundColor: '#1363DF',
    borderRadius: 8,
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
