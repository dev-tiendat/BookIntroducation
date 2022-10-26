import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/database';
import Modal from 'react-native-modalbox';
import {COLORS, SIZES, FONTS} from '../../constants/';
import {TestScreenProps} from '../../navigation/Navigator';

const TestScreen: React.FC<TestScreenProps> = ({navigation, route}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const ref = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Test Screen </Text>
      <Modal
        style={{
          width: 200,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        isOpen={isOpen}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              width: 50,
              height: 50,
            }}
            onPress={() => setIsOpen(false)}>
            <Text>Button</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    color: 'black',
  },
});

export default TestScreen;
