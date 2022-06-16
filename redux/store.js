import {leaderboardReducer} from './leaderboardReducer';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const config = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};
const persistedReducer = persistReducer(config, leaderboardReducer);
export const store = configureStore({
  reducer: leaderboardReducer,
  devTools: true,
});
export const persistor = persistStore(store);
