import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button'
import Api, { Alert } from '../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Verification({ navigation, route }) {
  const [code, setCode] = useState('');
  const [errCode, setErrCode] = useState(false);
  const [loader, setLoader] = useState(false);
  const { email, userId, userCode, password } = route.params;

  const goBack = () => {
    navigation.goBack()
  }

  const onSetCode = (text) => {
    setCode(text)
    setErrCode(false)
  }

  const goToCompanyDetail = () => {
    if (code.length == 0) {
      setErrCode(true)
    } else {
      verify()
    }
  }

  const verify = async () => {
    setLoader(true)
    try {
      const response = await Api.post('/customer/validateotp', {
        email,
        userid: userId,
        authenticationcode: code,
      });
      if (response.data.status == 200) {
        if (response.data.data.length > 0) {
          alert("Code Verified!!!")
          var Id = response.data.data[0].userid
          if (!password) {
            await AsyncStorage.setItem('userId', Id.toString());
            navigation.navigate('CompanyDetails')
          } else {
            navigation.navigate('ChangePassword', {
              Id
            })
          }
        } else {
          alert("Unable to verify your code")
        }
      } else {
        // navigation.navigate('ChangePassword', {
        //   Id: userId
        // })

        alert("Unable to verify your code")
      }
    } catch (err) {
      console.log(err)
      alert('An Error Occured');
    }
    setLoader(false)
  }

  const resend = async () => {
    try {
      const response = await Api.post('/customer/resendotp', {
        email,
      });
      console.log("response", response)
      if (response.data.status == 200) {
        alert(response.data.message)
      } else {
        alert(response.data.message);
      }
    } catch (err) {
      alert('An Error Occured');
    }
  }
  return (
    <>
      <Header goBack={goBack}
        title="Verification" />

      <View style={Styles.container}>
        <Text style={Styles.verificationText}>
          An OTP e-mail has been sent. Check you e-mail now for an authentication code.
        </Text>

        <Input placeholder='Authentication Code' onChange={onSetCode} />
        {errCode && <Text style={Styles.err}>* Required</Text>}

        <TouchableOpacity onPress={resend}>
          <Text style={Styles.forgotText}>Resend Code</Text>
        </TouchableOpacity>

        <Button onPress={goToCompanyDetail}
          loader={loader}
          title="Submit" />
      </View>
    </>
  );
}

export default Verification;