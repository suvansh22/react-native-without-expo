import React from 'react';
import {StyleSheet, View} from 'react-native';
import MonthlyLeaderboard from './monthlyLeaderboard';
import Home from './Home';
import Courses from './Courses';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeLight from './monthlyLeaderboard/icon/homeLight.svg';
import HomeDark from './monthlyLeaderboard/icon/homeDark.svg';
import CoursesLight from './monthlyLeaderboard/icon/coursesLight.svg';
import CoursesDark from './monthlyLeaderboard/icon/coursesDark.svg';
import LeaderboardDark from './monthlyLeaderboard/icon/leaderboardDark.svg';

const Tab = createBottomTabNavigator();
const ICON_MAP_INACTIVE = {
  Home: HomeLight,
  Courses: CoursesLight,
  Leaderboard: LeaderboardDark,
};
const ICON_MAP_ACTIVE = {
  Home: HomeDark,
  Courses: CoursesDark,
  Leaderboard: LeaderboardDark,
};

export default function TabNavigation() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: '#fff'}}
      tabBarOptions={{
        inactiveTintColor: '#7A8B94',
        activeTintColor: '#3C4852',
        labelStyle: styles.label,
      }}
      screenOptions={({route}) => {
        const ActiveIcon = ICON_MAP_ACTIVE[route.name];
        const InactiveIcon = ICON_MAP_INACTIVE[route.name];
        return {
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tab}>
                <View style={styles.tabTopBorder} />
                <ActiveIcon />
              </View>
            ) : (
              <View style={styles.tab}>
                <InactiveIcon />
              </View>
            ),
        };
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Leaderboard" component={MonthlyLeaderboard} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  tabTopBorder: {
    width: '100%',
    height: 2,
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    borderBottomEndRadius: 2,
    borderBottomLeftRadius: 2,
  },
});
