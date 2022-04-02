import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header'
import Styles from './AuthStyles'
import Input from '../components/Input'
import Button from '../components/Button'
import Api, { Alert } from '../Api'

let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

function ForgotPassword({ navigation, route }) {
    const [email, setEmail] = useState('');
    const [errCode, setErrCode] = useState(false);
    const [loader, setLoader] = useState(false);
    const [errEmailFormat, setErrEmailFormat] = useState(false);

    const goBack = () => {
        navigation.goBack()
    }

    const onSetCode = (text) => {
        setErrCode(false)
        setEmail(text)
        if (reg.test(text) === false) {
            setErrEmailFormat(true)
        } else {
            setErrEmailFormat(false)
        }
    }

    const goToEmail = () => {
        if (email.length == 0) {
            setErrCode(true)
        } else if (errEmailFormat) {
            return
        } else {
            verify()
        }
    }

    const verify = async () => {
        setLoader(true)
        try {
            const response = await Api.post('/customer/forgotpassword', {
                email,
            });
            if (response.data.success == 1) {
                if (response.data.data.length > 0) {
                    var userId = response.data.data[0].userid
                    var userCode = response.data.code
                    var password = true
                    navigation.navigate('Verification', {
                        userCode,
                        email,
                        userId,
                        password
                    })
                } else {
                    alert("An Error Occured");
                }
            }
            else {
                alert("Email Does not Exist");
            }
        } catch (err) {
            alert('An Error Occured');
        }
        setLoader(false)
    }

    return (
        <>
            <Header goBack={goBack}
                title="Forgot Password" />

            <View style={Styles.container}>
                <Text style={Styles.verificationText}>
                    Please enter your email for verification
                </Text>

                <Input placeholder='Enter Email' onChange={onSetCode} customStyles={{ marginBottom: 20 }} />
                {errCode && <Text style={Styles.err}>* Required</Text>}
                {!errCode && errEmailFormat && email.length > 0 && <Text style={Styles.err}>* Invalid Email Format</Text>}

                <Button onPress={goToEmail}
                    loader={loader}
                    title="Submit" />
            </View>
        </>
    );
}

export default ForgotPassword;