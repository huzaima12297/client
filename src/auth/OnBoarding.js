import React from 'react';
import { ImageBackground, TouchableWithoutFeedback } from 'react-native';
import Images from '../themes/Images'
import Styles from './AuthStyles'

function OnBoarding({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Login') }}>
      <ImageBackground source={Images.onBoarding} style={Styles.fullImage} />
    </TouchableWithoutFeedback>
  );
}
export default OnBoarding;