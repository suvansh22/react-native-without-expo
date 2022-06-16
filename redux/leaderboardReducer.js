import {
  ADD_LEADERBORAD_DATA,
  LEADERBOARD_DATA_LOADING,
  LEADERBOARD_DATA_FAIL,
} from './actionTypes';

const initalState = {
  isLoading: false,
  data: [],
  err: false,
};
export const leaderboardReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_LEADERBORAD_DATA:
      return {
        ...state,
        data: state.data.concat(action.data),
        isLoading: false,
      };
    case LEADERBOARD_DATA_LOADING:
      return {...state, isLoading: true, err: false};
    case LEADERBOARD_DATA_FAIL:
      return {...state, isLoading: false, err: action.err};
    default:
      return state;
  }
};
