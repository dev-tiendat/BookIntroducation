import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextInputFocusEventData,
} from 'react-native';

import {FONTS, SIZES, COLORS} from '../constants';

interface FormInput {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  value?: string;
  prependComponent?: React.ReactNode;
  appendComponent?: React.ReactNode;
  onChange?: (text: string) => void;
}

const FormInput: React.FC<any> = ({
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  editable,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  maxLength,
  autoFocus,
  textAlign,
  ref,
  placeholderTextColor = COLORS.grey60,
}) => {
  return (
    <View style={{...containerStyle}}>
      <View style={[styles.inputContainer, {...inputContainerStyle}]}>
        {prependComponent}
        <TextInput
          ref={ref}
          style={[styles.input, {...inputStyle}]}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          // autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          onChangeText={text => onChange(text)}
          onPressIn={onPress}
          autoFocus={autoFocus}
          textAlign={textAlign}
          // editable={editable}
        ></TextInput>

        {appendComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
  },
  input: {
    flex: 1,
    ...FONTS.h3,
  },
});

export default FormInput;
