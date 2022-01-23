import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button';

function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={Styles.container}>
      <View style={Styles.centerContainer}>

        <Input placeholder='E-mail Address' />

        <Input placeholder='Password'
          customStyles={Styles.passwordInput}
          secureTextEntry={!showPassword}
          setShowPassword={() => setShowPassword(!showPassword)}
          showIcon={true}
          customInputStyle={Styles.centerContainer}
        />

        <Text style={Styles.forgotText}>Forgot password ?</Text>

        <Button title="Log In"/>

        <Text style={Styles.or}>or</Text>

        <Button title="Log In with Google"/>
      </View>

      <TouchableOpacity onPress={() => { navigation.navigate('Signup') }}
        style={Styles.rowContainer}>
        <Text>Don't have an account ? </Text>
        <Text style={Styles.boldText}>Sign Up.</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Login;