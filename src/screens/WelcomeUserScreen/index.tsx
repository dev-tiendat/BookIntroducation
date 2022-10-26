import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {Shadow} from 'react-native-shadow-2';
import {WelcomeUserScreenProps} from '../../navigation/types';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {FormInput, IconButton, TextButton} from '../../components';

const CROP_SIZE = 200;

const WelcomeUserScreen: React.FC<WelcomeUserScreenProps> = ({navigation}) => {
  const [pathImage, setPathImage] = useState<string>();
  // const imageName = uuid();
  const reference = storage().ref(`AvatarImages/image.png`);
  const [indicatorUserName, setIndicatorUserName] = useState<string>('');
  const [isUserNameValid, setIsUserValid] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  // console.log(pathImage);

  const handlePressSelectImage = () => {
    console.log(auth().currentUser);
    ImagePicker.openPicker({
      width: CROP_SIZE,
      height: CROP_SIZE,
      cropping: true,
    }).then(image => {
      setPathImage(image.path);
    });
  };

  const uploadImage = async () => {
    await reference
      .putFile(pathImage!)
      .then(() => {
        console.log('thành công');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onChangTextUserName = (text: string) => {
    setUserName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconButton
          icon={icons.back_icon}
          iconStyle={{
            tintColor: COLORS.dark60,
            width: SIZES.h2,
            height: SIZES.h2,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={{marginTop: SIZES.padding}}>
        <Shadow>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Cập nhật thông tin để tiếp tục</Text>
            <TouchableOpacity style={styles.avatarContainer}>
              <Image
                source={pathImage ? pathImage : icons.avatar_icon}
                style={styles.avatar}
              />
              <Text style={styles.avatarText}>Ảnh đại diện</Text>
            </TouchableOpacity>
            <FormInput
              containerStyle={{
                marginTop: SIZES.padding,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.error,
              }}
              inputStyle={{
                color: COLORS.black,
              }}
              placeholder="Tên của bạn là gì ?"
              value={userName}
              onChange={onChangTextUserName}
            />
          </View>
        </Shadow>
      </View>
      <View style={{flex: 1, marginTop: SIZES.padding}}>
        <TextButton
          label="Gửi mã xác nhận"
          // disabled={!isPhoneNumberValid}
          onPress={() => handlePressCreateUserProfile()}
          contentContainerStyle={{
            marginBottom: SIZES.padding * 2,
            backgroundColor: !isPhoneNumberValid ? COLORS.gray : COLORS.primary,
            borderRadius: SIZES.radius,
            paddingHorizontal: 15,
            paddingVertical: 18,
          }}
          labelStyle={{
            color: COLORS.light,
            ...FONTS.h3,
          }}
        />
      </View>
      <Text
        style={[
          styles.indicatorText,
          {
            color:
              indicatorEmail === types.IndicatorEmail.INVALID_EMAIL
                ? COLORS.error
                : COLORS.darkGreen,
          },
        ]}>
        {indicatorEmail}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding,
  },
  headerContainer: {
    alignItems: 'flex-start',
  },
  title: {
    width: '60%',
    color: COLORS.dark,
    ...FONTS.h1,
    lineHeight: 40,
  },
  formContainer: {
    width: SIZES.width - SIZES.padding * 2,
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  avatarContainer: {
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  avatarText: {
    ...FONTS.h4,
    color: COLORS.secondary,
    marginTop: SIZES.base,
  },
});

export default WelcomeUserScreen;
