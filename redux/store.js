import {leaderboardReducer} from './leaderboardReducer';
import {configureStore} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import {userInfoSlice} from './userInfoReducer';
import {combineReducers} from 'redux';

const config = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  blacklist: ['err', 'isLoading'],
};
const persistedReducer = persistReducer(config, userInfoSlice.reducer);
export const store = configureStore({
  reducer: combineReducers({
    leaderboard: leaderboardReducer,
    userInfo: persistedReducer,
  }),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});
export const persistor = persistStore(store);
