import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Alert,
} from 'react-native';
import USER_DATA from './USER_DATA.json';
import {actions} from '../redux/userInfoReducer';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserErr, selectUserLoading} from '../redux/selectors';
export default function Login({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {addUserInfo, fetchUserInfo, errUserInfo} = actions;
  const isLoading = useSelector(selectUserLoading);
  const isErr = useSelector(selectUserErr);
  const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
  const handleLogin = async () => {
    if (email.length <= 0 || name.length <= 0 || password.length <= 0) {
      return;
    }
    dispatch(fetchUserInfo());
    await sleep(3000);
    if (
      Object.keys(USER_DATA).includes(email) &&
      USER_DATA[email].password === password
    ) {
      dispatch(addUserInfo({email, name}));
      navigation.navigate('App');
    } else {
      Alert.alert('Credentials are wrong');
      dispatch(errUserInfo());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
          editable={!isLoading}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={!isLoading}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          editable={!isLoading}
        />
        <TouchableHighlight
          disabled={isLoading}
          underlayColor={'#47B5FF'}
          onPress={handleLogin}
          activeOpacity={0.6}
          style={styles.button}>
          {!isLoading ? (
            <Text style={styles.buttonText}>Login</Text>
          ) : (
            <ActivityIndicator size="small" color="#000" />
          )}
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  error: {
    color: 'red',
    marginTop: 16,
  },
});