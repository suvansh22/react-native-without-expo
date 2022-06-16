import {
  ADD_LEADERBORAD_DATA,
  LEADERBOARD_DATA_LOADING,
  LEADERBOARD_DATA_FAIL,
} from './actionTypes';

export const fetchLeaderboardData = () => ({
  type: LEADERBOARD_DATA_LOADING,
});

export const addLeaderboardData = payload => {
  return {type: ADD_LEADERBORAD_DATA, data: payload};
};

export const fetchLeaderBoardDataFailed = () => {
  return {type: LEADERBOARD_DATA_FAIL, err: true};
};
