import React,{ useEffect, useState } from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {firebase} from '@react-native-firebase/database';
import {COLORS, SIZES, FONTS} from '../../constants/';

const TestScreen = () => {
    const [text,setText] = useState<string>();
    useEffect(()=> {
        const ref = firebase
        .app()
        .database(
          'https://bookintroduction-b31d0-default-rtdb.asia-southeast1.firebasedatabase.app/',
        ).ref('/comments/').on('value',snapshot => {
            // setText(snapshot.val());
            console.log(snapshot.val());
        });
    });

  return (
    <SafeAreaView style={styles.container}>
      <Text>{text}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...FONTS.h2,
  },
});

export default TestScreen;
