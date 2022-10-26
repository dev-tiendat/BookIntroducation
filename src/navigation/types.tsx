import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ConfirmationResult} from '@firebase/auth-types';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type BottomTabNavigatorParamList = {
  Home: undefined;
  Favourite: undefined;
  User: undefined;
  Search: undefined;
};

type BottomTabProps = BottomTabScreenProps<BottomTabNavigatorParamList>;

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabNavigatorParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList>
>;

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

type RegisterByEmailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RegisterByEmail'
>;

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

type VertificationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Vertification'
>;

type PhoneAuthScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PhoneAuth'
>;

type WelcomeUserScreenProps = NativeStackScreenProps<
  RootStackParamList
>

type RootStackParamList = {
  Splash: undefined;
  BottomTab: NavigatorScreenParams<BottomTabNavigatorParamList>;
  Onboarding: undefined;
  Test: undefined;
  SignIn: undefined;
  ForgotPassword: undefined;
  RegisterByEmail: undefined;
  PhoneAuth: undefined;
  Vertification: {
    confirmation: FirebaseAuthTypes.ConfirmationResult;
    phoneNumber: string;
  };
  WelcomeUser: undefined;
};

export type {
  RootStackParamList,
  BottomTabProps,
  BottomTabNavigatorParamList,
  HomeScreenProps,
  SignInScreenProps as SignInProps,
  RegisterByEmailScreenProps,
  ForgotPasswordScreenProps,
  VertificationScreenProps,
  PhoneAuthScreenProps,
  WelcomeUserScreenProps
};
