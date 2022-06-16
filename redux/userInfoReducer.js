import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  userEmail: '',
  login: false,
  isLoading: false,
  err: false,
};

export const userInfoSlice = createSlice({
  name: 'userInfo',
  reducers: {
    fetchUserInfo: (state, action) => {
      state.isLoading = true;
    },
    addUserInfo: (state, action) => {
      state.isLoading = false;
      state.userEmail = action.payload.email;
      state.userName = action.payload.name;
      state.login = true;
    },
    errUserInfo: (state, action) => {
      state.isLoading = false;
      state.err = true;
      state.login = false;
    },
    clearUserInfo: () => initialState,
  },
  initialState: initialState,
});

export const actions = userInfoSlice.actions;
