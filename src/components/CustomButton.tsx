import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {FONTS} from '../constants';

interface CustomButtonProps {
  text: string;
  color: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  backgroundColor: string;
  borderRadius?: number;
  onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  color,
  backgroundColor,
  paddingHorizontal = 0,
  paddingVertical = 0,
  borderRadius = 0,
  onPress,
}) => {
  if (!onPress) {
    return (
      <View
        style={{
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
        }}>
        <Text
          style={{
            ...FONTS.h3,
            color: color,
          }}>
          {text}
        </Text>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
        }}
        onPress={() => onPress}>
        <Text
          style={{
            ...FONTS.h3,
            color: color,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
};

export default CustomButton;
