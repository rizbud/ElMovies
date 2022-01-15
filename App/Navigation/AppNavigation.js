import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MoviesScreen from '@Containers/Movies';
import TVScreen from '@Containers/TV';
import DetailScreen from '@Containers/Detail';

import {apply} from '@Themes/OsmiProvider';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      swipeEnabled={false}
      lazy
      tabBarOptions={{
        labelStyle: apply('font-bold'),
        activeTintColor: 'white',
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
        screenOptions={{
          headerStyle: apply('bg-dark'),
          headerTitleStyle: apply('font-bold -ml-4 text-base'),
          headerTintColor: 'white',
          cardOverlayEnabled: false,
          cardStyleInterpolator: ({current, layouts}) => ({
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          }),
        }}
        initialRouteName="Tab">
        <Stack.Screen
          options={{headerShown: false}}
          name="Tab"
          component={TabNavigation}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => ({title: route?.params?.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
