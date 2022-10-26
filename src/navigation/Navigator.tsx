import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {COLORS} from '../constants';
import {
  SplashScreen,
  OnboardingScreen,
  TestScreen,
  SignInScreen,
  ForgotPasswordScreen,
  RegisterByEmailScreen,
  VertificationScreen,
  PhoneAuthScreen,
  WelcomeUserScreen,
} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';
import {RootStackParamList} from './types';

export type OnBoardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding',
  'BottomTab'
>;

export type TestScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Test',
  'BottomTab'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Stack.Navigator
        initialRouteName="WelcomeUser"
        // initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{animation: 'none'}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{animation: 'default'}}
        />
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="RegisterByEmail"
          component={RegisterByEmailScreen}
          options={{animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="PhoneAuth"
          component={PhoneAuthScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Vertification"
          component={VertificationScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="WelcomeUser"
          component={WelcomeUserScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
