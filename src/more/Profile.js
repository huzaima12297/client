import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import Images from '../themes/Images';

function Profile({ navigation }) {
    return (
        <>
            <View style={styles.view}>
                <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
                    <Icon size={20} color={'black'} name="chevron-back-outline" />
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600", flex: 1 }}>
                    Profile
                </Text>

                <Icon name="notifications-outline" color={'#45B17F'} size={20} />
                <TouchableOpacity onPress={() => navigation.navigate('EDitCompanyProfile')}>
                    <Icon name="eyedrop-outline" color={'#45B17F'} size={20} style={{ marginLeft: 15 }} />
                </TouchableOpacity>

            </View>

            <View style={[styles.view, { marginTop: 50 }]}>
                <View style={{ flex: 1 }}>
                    <Image source={Images.dummyUser} style={{ width: 70, height: 70, borderRadius: 0 }}
                        resizeMode={'contain'} />

                </View>
                <Button title={'View SOA'} customStyle={{ paddingHorizontal: 20, backgroundColor: "#FFDB58" }} />
            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <Text style={{ color: 'black', fontWeight: "700" }}>
                    John Smith
                </Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>
                    Admin at AES Technology
                </Text>

                <Text style={{ color: "grey", fontSize: 12, marginTop: 10 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text style={{ color: 'black', fontWeight: "700" }}>
                        Secretary Service
                    </Text>

                    <Icon name="eyedrop-outline" color={'#45B17F'} size={20} style={{ marginLeft: 15 }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black', fontWeight: "500" }}>
                            Secretary 1
                        </Text>

                        <Text style={{ color: 'grey' }}>
                            John Smith
                        </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Text style={{ color: 'black', fontWeight: "500" }}>
                            Secretary 2
                        </Text>

                        <Text style={{ color: 'grey' }}>
                            John Doe
                        </Text>
                    </View>
                </View>

                <Text style={{ color: 'black', fontWeight: "700", marginTop: 20 }}>
                    Account Setting
                </Text>

                <TouchableOpacity onPress={() => navigation.navigate("ChangePassword")}
                    style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: 'black', paddingVertical: 15 }}>
                    <Text style={{ flex: 1 }}>
                        Edit Password
                    </Text>

                    <Icon size={20} color={'black'} name="chevron-forward-outline" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("BusinessInfo") }}
                    style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: 'black', paddingVertical: 15 }}>
                    <Text style={{ flex: 1 }}>
                        Company Profile
                    </Text>

                    <Icon size={20} color={'black'} name="chevron-forward-outline" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Notification")}
                    style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: 'black', paddingVertical: 15 }}>
                    <Text style={{ flex: 1 }}>
                        View Notifications
                    </Text>

                    <Icon size={20} color={'black'} name="chevron-forward-outline" />
                </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'red', borderRadius: 15, marginHorizontal: 20, marginTop: 40, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                <Text style={{ color: 'red' }}>Log Out</Text>
            </View>


        </>
    );
}
export default Profile;

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center'
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
        margin: 20,
        marginBottom: 0
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