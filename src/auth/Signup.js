import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Header from '../components/Header'
import Button from '../components/Button'
import Input from '../components/Input'
import Styles from './AuthStyles'
import Api, { Alert } from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

function Signup({ navigation }) {
  const [userName, setUserName] = useState('');
  const [errUserName, setErrUserName] = useState(false);

  const [email, setEmail] = useState('');
  const [errEmail, setErrEmail] = useState(false);
  const [errEmailFormat, setErrEmailFormat] = useState(false);

  const [confirmEmail, setConfirmEmail] = useState('');
  const [errConfirmEmail, setErrConfirmEmail] = useState(false);
  const [errConfirmEmailFormat, setErrConfirmEmailFormat] = useState(false);
  const [matchEmail, setMatchEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [errPassword, setErrPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [errConfirmPassword, setErrConfirmPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);

  const [checkBox, setCheckBox] = useState(false);
  const [loader, setLoader] = useState(false);

  const goBack = () => {
    navigation.goBack()
  }

  const onSetUserName = (text) => {
    setUserName(text)
    setErrUserName(false)
  }

  const onSetEmail = (text) => {
    setEmail(text)
    if (text == confirmEmail) {
      setMatchEmail(false)
    } else {
      setMatchEmail(true)
    }
    setErrEmail(false)
    if (reg.test(text) === false) {
      setErrEmailFormat(true)
    } else {
      setErrEmailFormat(false)
    }
  }

  const onSetConfirmEmail = (text) => {
    setConfirmEmail(text)
    if (text == email) {
      setMatchEmail(false)
    } else {
      setMatchEmail(true)
    }
    setErrConfirmEmail(false)
    if (reg.test(text) === false) {
      setErrConfirmEmailFormat(true)
    } else {
      setErrConfirmEmailFormat(false)
    }
  }

  const onSetPassword = (text) => {
    setPassword(text)
    if (text == confirmPassword) {
      setMatchPassword(false)
    } else {
      setMatchPassword(true)
    }
    setErrPassword(false)
  }

  const onSetConfirmPassword = (text) => {
    setConfirmPassword(text)
    if (text == password) {
      setMatchPassword(false)
    } else {
      setMatchPassword(true)
    }

    setErrConfirmPassword(false)
  }

  const goToSignUp = () => {
    if (userName.length == 0) {
      setErrUserName(true)
    } else if (email.length == 0) {
      setErrEmail(true)
    } else if (errEmailFormat) {
      return
    } else if (confirmEmail.length == 0) {
      setErrConfirmEmail(true)
    } else if (errConfirmEmailFormat) {
      return
    } else if (matchEmail) {
      return
    } else if (password.length == 0) {
      setErrPassword(true)
    } else if (confirmPassword.length == 0) {
      setErrConfirmPassword(true)
    } else if (matchPassword) {
      return
    } else {
      signUp()
    }
  }

  const signUp = async () => {
    setLoader(true)
    try {
      const response = await Api.post('/customer/addcustomer', {
        username: userName,
        email,
        password,
        status: 0,
        usertype: 2
      });
      if (response.data.status == 200) {
        alert(response.data.message)
        var userCode = response.data?.data?.authenticationcode
        var userId = response.data.userid
        await AsyncStorage.setItem('name', userName);
        navigation.navigate('Verification', {
          userCode,
          email,
          userId
        })
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert(err);
    }
    setLoader(false)
  }

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();

  return (
    <>
      <Header goBack={goBack}
        title="Sign Up" />

      <ScrollView style={Styles.container} showsVerticalScrollIndicator={false}>
        <View style={Styles.fullContainer}>

          <Input placeholder='Full Name (as per NRIC)'
            onChange={onSetUserName}
            autoFocus={true}
            returnKeyType="next"
            onSubmitEditing={() => ref_input2.current.focus()}
          />

          {errUserName && <Text style={Styles.err}>* Required</Text>}

          <Input placeholder='E-mail Address'
            onChange={onSetEmail}
            inputRef={ref_input2}
            returnKeyType="next"
            onSubmitEditing={() => ref_input3.current.focus()}
          />
          {errEmail && <Text style={Styles.err}>* Required</Text>}
          {!errEmail && errEmailFormat && email.length > 0 && <Text style={Styles.err}>* Invalid Email Format</Text>}

          <Input
            placeholder='Confirm E-mail Address'
            onChange={onSetConfirmEmail}
            inputRef={ref_input3}
            returnKeyType="next"
            onSubmitEditing={() => ref_input4.current.focus()}
          />
          {errConfirmEmail && <Text style={Styles.err}>* Required</Text>}
          {!errConfirmEmail && errConfirmEmailFormat && confirmEmail.length > 0 && <Text style={Styles.err}>* Invalid Email Format</Text>}
          {!errConfirmEmail && !errConfirmEmailFormat && matchEmail &&
            email.length > 0 && confirmEmail.length > 0 && < Text style={Styles.err}>* Email Not Matched</Text>}

          <Input placeholder='Password'
            customStyles={Styles.passwordInput}
            secureTextEntry={!showPassword}
            setShowPassword={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
            showIcon={true}
            customInputStyle={Styles.centerContainer}
            onChange={onSetPassword}
            inputRef={ref_input4}
            returnKeyType="next"
            onSubmitEditing={() => ref_input5.current.focus()}

          />
          {errPassword && password.length > 0 && <Text style={Styles.err}>* Required</Text>}


          <Input placeholder='Confirm Password'
            customStyles={Styles.passwordInput}
            secureTextEntry={!showConfirmPassword}
            setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
            showIcon={true}
            showPassword={showConfirmPassword}
            customInputStyle={Styles.centerContainer}
            onChange={onSetConfirmPassword}
            inputRef={ref_input5}
            returnKeyType="done"
          />
          {errConfirmPassword && confirmPassword.length > 0 && <Text style={Styles.err}>* Required</Text>}
          {matchPassword && !errConfirmPassword && password.length > 0 && confirmPassword.length > 0 && <Text style={Styles.err}>Password Not Matched</Text>}


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

          <Button title="Sign Up" onPress={goToSignUp} loader={loader} />

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