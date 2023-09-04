import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import SignInOtpScreen from '../screens/signInPage/signInOtpScreen/signInOtpScreen';
// import SignInScreen from '../screens/signInPage/signInScreen/signInScreen';
// import SignUpScreen from '../screens/signUpPage/signUpScreen/signUpScreen';
import Intro from '../screens/splash/Intro/Intro';
import IntroSlider0 from '../screens/splash/IntroSlider0/IntroSlider0';
import IntroSlider1 from '../screens/splash/IntroSlider1/IntroSlider1';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';

// import IntroSlider2 from '../screens/splash/IntroSlider2/IntroSlider2';
import SplashImage from '../screens/splash/SplashImage/SplashImage';
import {theme} from '../styles/theme';

const Stack = createNativeStackNavigator();

const AuthNavigation = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName={newLogin == false ? 'SplashImage' : 'Welcome'}
      initialRouteName={'SignIn'}>
      <Stack.Screen
        name={'SplashImage'}
        component={SplashImage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'IntroSlider0'}
        component={IntroSlider0}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'IntroSlider1'}
        component={IntroSlider1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'Intro'}
        component={Intro}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignIn'}
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'SignUp'}
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
