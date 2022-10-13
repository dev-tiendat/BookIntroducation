import {NavigatorScreenParams} from '@react-navigation/native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'

type BottomTabParamList = {
    Home: undefined;
    Favourite: undefined;
    User: undefined;
}

type RootStackParamList = {
    BottomTab: NavigatorScreenParams<BottomTabParamList>;
    Onboarding: undefined;
    Test: undefined;
}

export type {RootStackParamList,BottomTabParamList}; 