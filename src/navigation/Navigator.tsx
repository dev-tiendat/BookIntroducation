import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {OnboardingScreen,TestScreen} from '../screens';
import BottomTab from './BottomTab';
import {RootStackParamList} from './types';
import {useSelector} from 'react-redux/';
import {selectShowScreen} from '../redux/slices/showScreensSlice';

export type OnBoardingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding',
  'BottomTab'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  const isShowOnboardingScreen = useSelector(selectShowScreen);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={isShowOnboardingScreen ? 'Onboarding' : 'BottomTab'}
        initialRouteName='Test'
        >
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen 
        name="Test"
        component={TestScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
