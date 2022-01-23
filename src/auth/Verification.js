import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button'

function Verification({ navigation }) {
  const goBack = () => {
    navigation.goBack()
  }

  const goToCompanyDetail = () => {
    navigation.navigate('CompanyDetails')
  }

  return (
    <>
      <Header goBack={goBack}
        title="Verification" />

      <View style={Styles.container}>
        <Text style={Styles.verificationText}>
          An OTP e-mail has been sent. Check you e-mail now for an authentication code.
        </Text>

        <Input placeholder='Authentication Code' />

        <Text style={Styles.forgotText}>Resend Code</Text>

        <Button onPress={goToCompanyDetail}
          title="Submit" />
      </View>
    </>
  );
}

export default Verification;