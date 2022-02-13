import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import Styles from '../auth/AuthStyles';
import UserDate from '../components/UserDate';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Dropdown from '../components/DropDown';
import Buttom from '../components/Button'
import Button from '../components/Button';

function ChangePassword({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

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
                    secureTextEntry={!showPassword}
                    setShowPassword={() => setShowPassword(!showPassword)}
                    showIcon={true}
                    customInputStyle={Styles.centerContainer}
                />
                <Input placeholder='New Password'
                    customStyles={Styles.passwordInput}
                    secureTextEntry={!showPassword1}
                    setShowPassword={() => setShowPassword1(!showPassword1)}
                    showIcon={true}
                    customInputStyle={Styles.centerContainer}
                />
                <Input placeholder='Confirm Password'
                    customStyles={[Styles.passwordInput, {marginBottom: 20}]}
                    secureTextEntry={!showPassword2}
                    setShowPassword={() => setShowPassword2(!showPassword2)}
                    showIcon={true}
                    customInputStyle={Styles.centerContainer}
                />

                <Button title={'Change Password'}/>
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