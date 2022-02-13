import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import Styles from '../auth/AuthStyles';
import UserDate from '../components/UserDate';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import Dropdown from '../components/DropDown';

function EDitCompanyProfile({ navigation }) {
    const [show, setShowCalendar] = useState(false);
    var currentDate = new Date();
    const [date, setDate] = useState(currentDate);
    const [dateDisplay, setDateDisplay] = useState('Founded In');

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
                    Edit Company Profile
                </Text>
            </View>

            <View style={styles.container}>
                <Input placeholder='UEN Number'
                />

                <Input placeholder='Company Name' />

                <View style={Styles.row}>
                    <Input
                        customStyles={Styles.industry}
                        placeholder='Technology'
                    />

                    <UserDate onPress={() => setShowCalendar(!show)}
                        dateDisplay={dateDisplay}
                        customStyle={Styles.dateStyle} />
                </View>

                <Input placeholder='+65 9898 6754'
                />

                <Input placeholder='Some Text'
                    numberOfLines={5}
                    customInputStyle={Styles.input}
                />

                <Dropdown
                    defaultValue={'Partners'}
                    options={['option 1', 'option 2']}
                />

                <Text style={{ marginTop: 20, marginBottom: 10, color: 'grey', fontSize: 16 }}>Directors</Text>

                <View style={{ backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 20 }}>
                    <Text style={{ marginBottom: 10, color: 'grey', fontSize: 16 }}>No. of directors</Text>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
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
                    <Input placeholder='Director 1' />

                    <Input placeholder='Director 2' />
                </View>

                <Text style={{ marginTop: 20, marginBottom: 10, color: 'grey', fontSize: 16 }}>TYpes of shareholder</Text>

                <View style={{ backgroundColor: 'white', paddingHorizontal: 10, paddingVertical: 20 }}>
                    <Text style={{ marginBottom: 10, color: 'grey', fontSize: 16 }}>No. of Shareholder</Text>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
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
                    <Input placeholder='John Smmith' />

                    <Input placeholder='Charles Doe' />
                </View>
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

            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
                    <Text style={{ color: 'red' }}>
                        Delete Company
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#45B17F', flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
                    <Text style={{ color: 'white' }}>
                        Save Changes
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}
export default EDitCompanyProfile;

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginHorizontal: 20
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