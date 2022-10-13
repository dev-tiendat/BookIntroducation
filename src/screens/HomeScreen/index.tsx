import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {FONTS, SIZES, COLORS,images} from '../../constants';
import Greeter from './components/Greeter';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Greeter user={{
        name: "Phạm Tiến Đạt",
        img: images.avatar,
      }}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
});

export default HomeScreen;
