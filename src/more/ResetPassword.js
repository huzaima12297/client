import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import Styles from '../auth/AuthStyles';
import Button from '../components/Button';
import Api from '../Api'

function ChangePassword({ navigation }) {
    const [loader, setLoader] = useState(false);

    const [oldpassword, setOldPassword] = useState('');
    const [errOldPassword, setErrOldPassword] = useState(false);
    const [showPasswordold, setShowPasswordold] = useState(false);

    const [password, setPassword] = useState('');
    const [errPassword, setErrPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [errConfirmPassword, setErrConfirmPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [matchPassword, setMatchPassword] = useState(false);

    const onSetPasswordold = (text) => {
        setOldPassword(text)
        setErrOldPassword(false)
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
        if (password.length == 0) {
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
        console.log(Id)
        try {
            const response = await Api.post('/customer/resetpassword', {
                password,
                confirmpassword: confirmPassword,
                userid: Id
            });
            console.log(response.data)
            if (response.data.success == 1) {
                // navigation.navigate('Login')
                // alert("Password changed successfully")
            } else {
                alert("Unable to change password");
            }
        } catch (err) {
            alert("Unable to change password");
        }
        setLoader(false)
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
                    <Icon size={20} color={'black'} name="chevron-back-outline" />
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                    Change Password
                </Text>
            </View>

            <View style={styles.container}>
                <Input placeholder='Old Password'
                    customStyles={Styles.passwordInput}
                    secureTextEntry={!showPasswordold}
                    setShowPassword={() => setShowPasswordold(!showPasswordold)}
                    showIcon={true}
                    showPassword={showPasswordold}
                    customInputStyle={Styles.centerContainer}
                    onChange={onSetPasswordold}
                />
                {errOldPassword && <Text style={Styles.err}>* Required</Text>}

                <Input placeholder='Password'
                    customStyles={Styles.passwordInput}
                    secureTextEntry={!showPassword}
                    setShowPassword={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}
                    showIcon={true}
                    customInputStyle={Styles.centerContainer}
                    onChange={onSetPassword}
                />
                {errPassword && <Text style={Styles.err}>* Required</Text>}


                <Input placeholder='Confirm Password'
                    customStyles={Styles.passwordInput}
                    secureTextEntry={!showConfirmPassword}
                    setShowPassword={() => setShowConfirmPassword(!showConfirmPassword)}
                    showIcon={true}
                    showPassword={showConfirmPassword}
                    customInputStyle={Styles.centerContainer}
                    onChange={onSetConfirmPassword}
                />
                {errConfirmPassword && <Text style={Styles.err}>* Required</Text>}
                {matchPassword && !errConfirmPassword && password.length > 0 && confirmPassword.length > 0 && <Text style={Styles.err}>Password Not Matched</Text>}

                <View></View>
                <Button title={'Change Password'} customStyle={{ marginTop: 15 }} />
            </View>

        </ScrollView>
    );
}
export default ChangePassword;

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 20
    },

    name: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginRight: 20
    },
    name1: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 20
    },
    userImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginLeft: 20
    },
    meeting: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        marginTop: 40,
        padding: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        marginHorizontal: 20
    },
    item: {
        backgroundColor: 'white',
        marginLeft: 15,
        padding: 20,
        marginTop: 10,
        alignSelf: 'stretch',
        width: 280,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center'
    },
    nameDoc: {
        color: '#45B17F',
        fontWeight: "700",
        marginBottom: 7
    }
})