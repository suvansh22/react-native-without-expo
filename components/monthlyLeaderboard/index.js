import React, {useEffect, useCallback, useState, useRef} from 'react';
import Axios from 'axios';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addLeaderboardData,
  fetchLeaderboardData,
  fetchLeaderBoardDataFailed,
} from '../../redux/action';
import {
  selectLeaderboardData,
  selectLoadingState,
  selectErrorState,
} from '../../redux/selectors';
import LeaderboardItem from './LeaderboardItem';
import HeroSection from '../heroSection';
import Config from 'react-native-config';

const ListHeaderComponent = () => {
  return (
    <View>
      <View style={styles.header}>
        <HeroSection />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Monthly leaderboard</Text>
      </View>
    </View>
  );
};

export default function MonthlyLeaderboard() {
  const dispatch = useRef(useDispatch());
  const leaderBoardData = useSelector(selectLeaderboardData);
  const loadingState = useSelector(selectLoadingState);
  const errState = useSelector(selectErrorState);
  const [currPage, setCurrPage] = useState(0);
  const [pageLeft, setPageLeft] = useState(true);
  const scroll_begin = useRef(false);

  const fetchLeaderBoardData = useCallback(async (offset = 0) => {
    if (!scroll_begin.current) {
      return;
    }
    console.log('fetching');
    dispatch.current(fetchLeaderboardData());
    try {
      await sleep(3000);
      const response = await Axios.get(
        `${Config.BASE_API}/exams/leaderboard/?offset=${offset}&&limit=10`,
      );
      if (response.status >= 200 && response.status <= 299) {
        const fetchedData = response?.data;
        const page_left = fetchedData?.data?.pagination?.has_next_page;
        setPageLeft(page_left);
        dispatch.current(addLeaderboardData(fetchedData.data.results));
        setCurrPage(prev => prev + 1);
      } else {
        throw new Error('result not found');
      }
    } catch (err) {
      console.log('err:', err);
      dispatch.current(fetchLeaderBoardDataFailed());
    } finally {
      scroll_begin.current = false;
    }
  }, []);

  useEffect(() => {
    scroll_begin.current = true;
    fetchLeaderBoardData();
  }, [fetchLeaderBoardData]);

  const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

  const handlePreFetchData = () => {
    if (!pageLeft || loadingState) {
      return;
    }
    fetchLeaderBoardData(currPage);
  };

  return leaderBoardData.length > 0 ? (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={() => {
        if (loadingState) {
          return <ActivityIndicator />;
        } else if (!loadingState && errState) {
          return (
            <TouchableOpacity
              onPress={() => {
                scroll_begin.current = true;
                handlePreFetchData();
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Retry</Text>
            </TouchableOpacity>
          );
        }
        return null;
      }}
      renderItem={LeaderboardItem}
      data={leaderBoardData}
      onScrollBeginDrag={() => (scroll_begin.current = true)}
      onEndReached={handlePreFetchData}
    />
  ) : (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
  },
  container: {
    marginTop: 24,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    color: '#3C4852',
    marginLeft: 16,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
    width: '30%',
    backgroundColor: '#3C4852',
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
