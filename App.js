import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar, View} from 'react-native';
import MonthlyLeaderboard from './components/monthlyLeaderboard';
import Home from './components/Home';
import Courses from './components/Courses';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeLight from './components/monthlyLeaderboard/icon/homeLight.svg';
import HomeDark from './components/monthlyLeaderboard/icon/homeDark.svg';
import CoursesLight from './components/monthlyLeaderboard/icon/coursesLight.svg';
import CoursesDark from './components/monthlyLeaderboard/icon/coursesDark.svg';
import LeaderboardDark from './components/monthlyLeaderboard/icon/leaderboardDark.svg';

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

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
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
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  label: {
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 12,
  },
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
