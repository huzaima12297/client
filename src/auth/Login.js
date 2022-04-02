import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button';
import Api, { Alert } from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [errPassowrd, setErrPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const onSetEmail = (text) => {
    setEmail(text)
    setErrEmail(false)
  }

  const onSetPassword = (text) => {
    setPassword(text)
    setErrPassword(false)
  }

  const onLogin = () => {
    if (email.length == 0) {
      setErrEmail(true)
    } else if (password.length == 0) {
      setErrPassword(true)
    } else {
      login()
    }
  }

  const login = async () => {
    setLoader(true)
    try {
      const response = await Api.post('/customer/logincustomer', {
        email,
        password,
      });
      if (response.data.status == 200) {
        if (response.data.data.length > 0) {
          await AsyncStorage.setItem('userId', response.data.data[0].userid.toString());
          await AsyncStorage.setItem('name', response.data.data[0].username.toString());
          if (response.data.company.length > 0) {
            await AsyncStorage.setItem('companyName', response.data.company[0].name.toString());
          }
          alert(response.data.message)
          navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }]
          })
          // navigation.navigate('Dashboard')
        } else {
          alert("Failed to login");
        }
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert('An Error Occured');
    }
    setLoader(false)
  }

  const ref_input2 = useRef();

  return (
    <View style={Styles.container}>
      <View style={Styles.centerContainer}>

        <Input placeholder='E-mail Address' onChange={onSetEmail}
          autoFocus={true}
          returnKeyType="next"
          onSubmitEditing={() => ref_input2.current.focus()}
        />
        {errEmail && <Text style={Styles.err}>* Required</Text>}


        <Input placeholder='Password'
          customStyles={Styles.passwordInput}
          secureTextEntry={!showPassword}
          setShowPassword={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          showIcon={true}
          customInputStyle={Styles.centerContainer}
          onChange={onSetPassword}
          inputRef={ref_input2}
          returnKeyType="done"
        />
        {errPassowrd && <Text style={Styles.err}>* Required</Text>}


        <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword') }}>
          <Text style={Styles.forgotText}>Forgot password ?</Text>
        </TouchableOpacity>

        <Button title="Log In" onPress={onLogin} loader={loader} />

        <Text style={Styles.or}>or</Text>

        <Button title="Log In with Google" />
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