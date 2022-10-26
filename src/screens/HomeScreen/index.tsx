import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FONTS, SIZES, COLORS, images} from '../../constants';
import Greeter from './components/Greeter';
import {HomeScreenProps} from '../../navigation/types';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView> */}
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#a29bfe',
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('Onboarding')}>
          <Text>Chuyen den Onboarding</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          onPress={() => navigation.navigate('SignIn')}>
          <Text>Chuyen den LogIn</Text>
        </TouchableOpacity>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
