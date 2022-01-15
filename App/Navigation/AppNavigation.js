import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MoviesScreen from '@Containers/Movies';
import TVScreen from '@Containers/TV';

import {apply} from '@Themes/OsmiProvider';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      tabBarOptions={{
        labelStyle: apply('font-bold'),
        activeTintColor: apply('white'),
        pressColor: apply('gray-300'),
        style: apply('bg-dark'),
        indicatorStyle: apply('bg-white'),
        tabStyle: apply('row justify-center self-center'),
        iconStyle: apply('pt-1'),
        showIcon: true,
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="movie-open" size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TV Shows"
        component={TVScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="television-play" size={16} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Tab">
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
