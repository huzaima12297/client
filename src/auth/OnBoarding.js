import React, { useEffect } from 'react';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native';
import Images from '../themes/Images'
import Styles from './AuthStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';

function OnBoarding({ navigation }) {
  useEffect(() => {
    getUserId()
  }), [];

  const getUserId = async () => {
    const value = await AsyncStorage.getItem('userId');
    if (value != null) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
    });

    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Login') }}>
      <ImageBackground source={Images.onBoarding} style={Styles.fullImage} />
    </TouchableWithoutFeedback>
  );
}
export default OnBoarding;