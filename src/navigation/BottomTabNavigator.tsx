import React, {useEffect, useState} from 'react';
import {ImageSourcePropType, StyleSheet, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import {COLORS, SIZES, FONTS, icons} from '../constants';
import {
  HomeScreen,
  FavouriteScreen,
  UserScreen,
  SearchScreen,
} from '../screens';
import {BottomTabNavigatorParamList, BottomTabProps} from './types';
import {NavigationState} from '@react-navigation/native';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

interface IconBottomTabProps {
  icon: ImageSourcePropType;
  tintColor: string;
}

const IconBottomTab: React.FC<IconBottomTabProps> = ({icon, tintColor}) => {
  return (
    <View>
      <Image
        source={icon}
        style={[
          styles.iconBottom,
          {
            tintColor: tintColor,
          },
        ]}
        resizeMode="contain"></Image>
    </View>
  );
};

const BottomTabNavigator = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    console.log(user);
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          if (route.name != 'Home' && !user) {
            e.preventDefault();
            navigation.navigate('SignIn');
          }
        },
      })}
      screenOptions={({navigation, route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? COLORS.primary : COLORS.gray;

          switch (route.name) {
            case 'Home':
              return (
                <IconBottomTab icon={icons.home_icon} tintColor={tintColor} />
              );
            case 'Favourite':
              return (
                <IconBottomTab
                  icon={icons.favourite_icon}
                  tintColor={tintColor}
                />
              );
            case 'User':
              return (
                <IconBottomTab icon={icons.user_icon} tintColor={tintColor} />
              );
            case 'Search':
              return (
                <IconBottomTab icon={icons.search_icon} tintColor={tintColor} />
              );
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="User" component={UserScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconBottom: {
    width: 30,
    height: 30,
  },
  tabBar: {
    width: SIZES.width - 50,
    height: 70,
    borderRadius: 25,
    position: 'absolute',
    left: 25,
    bottom: 20,
  },
});

export default BottomTabNavigator;
