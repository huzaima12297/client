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
function AddService({ navigation }) {
    const [show, setShowCalendar] = useState(false);
    var currentDate = new Date();
    const [date, setDate] = useState(currentDate);
    const [dateDisplay, setDateDisplay] = useState('Date of Appointment');


    const onChange = (event, selectedDate) => {
        setShowCalendar(false)
        const currentDate = selectedDate || date;
        setDateDisplay(moment(currentDate).format('l'));
        setDate(currentDate);
    };

    const onChangeText = ({ dialCode, unmaskedPhoneNumber, phoneNumber, isVerified }) => {
    };

    return (
        <ScrollView>
            <View style={styles.view}>
                <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
                    <Icon size={20} color={'black'} name="chevron-back-outline" />
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                    Add Secretarial Service
                </Text>
            </View>

            <View style={styles.container}>
                <Text style={{ marginTop: 20, marginBottom: 10, color: 'black', fontSize: 16, fontWeight: "700", paddingHorizontal: 10 }}>Directors</Text>

                <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                    <Text style={{ marginBottom: 10, color: 'black', fontSize: 16 }}>No. of director (s)</Text>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'flex-start', flex: 1, fontSize: 28 }}>
                            +
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            2
                        </Text>
                        <Text style={{ textAlign: 'right', flex: 1, fontSize: 28 }}>
                            -
                        </Text>
                    </View>

                    <View style={{ flex: 1, backgroundColor: "white", marginTop: 10, paddingHorizontal: 10, paddingBottom: 20 }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Director 1</Text>

                        <Input placeholder='Full Name (as per NIRC)' />

                        <Input placeholder='Email' />

                        <Input placeholder='Contact No #' />
                    </View>

                    <View style={{ flex: 1, backgroundColor: "white", marginTop: 10, paddingHorizontal: 10, paddingBottom: 20 }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Director 2</Text>

                        <Input placeholder='Full Name (as per NIRC)' />

                        <Input placeholder='Email' />

                        <Input placeholder='Contact No #' />
                    </View>
                </View>
            </View>


            <View style={styles.container}>
                <Text style={{ marginTop: 20, marginBottom: 10, color: 'black', fontSize: 16, fontWeight: "700", paddingHorizontal: 10 }}>Types of shareholder</Text>

                <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
                    <Text style={{ marginBottom: 10, color: 'black', fontSize: 16 }}>No. of shareholder (s)</Text>
                    <View style={{ flexDirection: 'row', flex: 1, backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 5, alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'flex-start', flex: 1, fontSize: 28 }}>
                            +
                        </Text>
                        <Text style={{ fontSize: 20 }}>
                            1
                        </Text>
                        <Text style={{ textAlign: 'right', flex: 1, fontSize: 28 }}>
                            -
                        </Text>
                    </View>

                    <View style={{ flex: 1, backgroundColor: "white", marginTop: 10, paddingHorizontal: 10, paddingBottom: 20 }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Shareholder 1</Text>

                        <Input placeholder='Full Name (as per NIRC)' />
                        <Input placeholder='IC No #' />

                        <Input placeholder='Email' />

                        <Input placeholder='Contact No #' />
                        <Input placeholder='UAN Number' />
                        <Input placeholder='Company Address'
                            numberOfLines={5}
                            customInputStyle={Styles.input}
                        />

                    </View>
                </View>

                <Buttom title={'Add Shareholder'} customStyle={{ marginVertical: 20 }} />


                {/* <View style={{ backgroundColor: 'white', marginTop: 20, paddingHorizontal: 10, marginHorizontal: 10 }}>
                    <Input placeholder='UEN Number'
                    />

                    <Input placeholder='Firm' />

                    <Input placeholder='Company Address'
                        numberOfLines={5}
                        customInputStyle={Styles.input}
                    />

                    <UserDate onPress={() => setShowCalendar(!show)}
                        dateDisplay={dateDisplay}
                        customStyle={[Styles.dateStyle, { paddingVertical: 15 }]} />

                    <Dropdown
                        defaultValue={'Current Status: Acting'}
                        options={['option 1', 'option 2']}
                    />

                </View> */}
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </ScrollView>
    );
}
export default AddService;

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginHorizontal: 10
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