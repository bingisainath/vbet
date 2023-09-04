import React from 'react';
import {useDispatch} from 'react-redux';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../styles/theme';

import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import JoinedOrg from '../screens/joinedOrg/JoinedOrg';
import YourOrg from '../screens/yourOrg/YourOrg';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const YourOrgStack = createNativeStackNavigator();
const JoinedOrgStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

const YourOrgStackScreen = () => {
  return (
    <YourOrgStack.Navigator initialRouteName="SearchScreen">
      <YourOrgStack.Screen
        name="YourOrg"
        component={YourOrg}
        options={{headerShown: false}} />
    </YourOrgStack.Navigator>
  );
};

const JoinedOrgStackScreen = () => {
  return (
    <JoinedOrgStack.Navigator initialRouteName="PublisedRideScreen">
      <JoinedOrgStack.Screen
        name="JoinedOrg"
        component={JoinedOrg}
        options={{headerShown: false}}
      />
    </JoinedOrgStack.Navigator>
  );
};

const AppNavigation = () => {

  const dispatch = useDispatch();

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      activeColor={theme.black}
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: theme?.white,
        borderTopColor: theme?.lightGrey,
        borderTopWidth: 1,
        height: 70,
      }}
      initialRouteName="Book Ride">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'magnify'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Your Org"
        component={YourOrgStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'car-clock'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Joined Org"
        component={JoinedOrgStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'car-side'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name={'account-outline'}
              size={focused ? 27 : 25}
              color={focused ? theme?.blue : theme?.black}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
