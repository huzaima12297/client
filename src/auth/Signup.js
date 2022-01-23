import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/Input'
import Styles from './AuthStyles'

function Signup({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checkBox, setCheckBox] = useState(false);

  const goBack = () => {
    navigation.goBack()
  }

  const goToVerification = () => {
    navigation.navigate('Verification')
  }

  return (
    <>
      <Header goBack={goBack}
        title="Sign Up" />

      <ScrollView style={Styles.container}>
        <View style={Styles.fullContainer}>

          <Input placeholder='Full Name (as per NRIC)' />

          <Input placeholder='E-mail Address' />

          <Input placeholder='Confirm E-mail Address' />

          <Input placeholder='Password'
            customStyles={Styles.passwordInput}
            secureTextEntry={!showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            showIcon={true}
            customInputStyle={Styles.centerContainer}
          />

          <Input placeholder='Confirm Password'
            customStyles={Styles.passwordInput}
            secureTextEntry={!showConfirmPassword}
            setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
            showIcon={true}
            customInputStyle={Styles.centerContainer}
          />

          <View style={Styles.checkBoxContainer}>
            <CheckBox
              value={checkBox}
              onValueChange={(newValue) => setCheckBox(newValue)}
            />

            <Text style={{ color: '#B0B0B0' }}>
              I Accept <Text style={{ textDecorationLine: "underline" }}>Terms & conditions</Text> and {"\n"}
              <Text style={{ textDecorationLine: "underline" }}>privacy policy</Text>
            </Text>
          </View>

          <Button title="Sign Up" onPress={goToVerification} />

          <Text style={Styles.or}>or</Text>

          <Button title="Sign Up with Google" />


          <TouchableOpacity onPress={() => { navigation.navigate('Login') }}
            style={Styles.rowContainer}>
            <Text>Already have an account ? </Text>
            <Text style={Styles.boldText}>Log In.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
export default Signup;