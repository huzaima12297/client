import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import Images from '../themes/Images';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'John Doe just join as Admin',
        date: "30 Dec 2020"
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'December ending soon, Dont forgot to pay tax',
        date: "30 Dec 2020"
    },
];


function Notification({ navigation }) {

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={{color: 'grey', fontSize: 12}}>{item.date}</Text>
            <Text style={{color: 'black', marginTop: 3}}>{item.title}</Text>
        </View>
    );

    return (
        <>
            <View style={styles.view}>
                <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
                    <Icon size={20} color={'black'} name="chevron-back-outline" />
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600", flex: 1 }}>
                    Notification
                </Text>
            </View>

            <View style={[{ marginTop: 50, marginHorizontal: 20 }]}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                    Today
                </Text>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>

            <View style={[{ marginTop: 20, marginHorizontal: 20 }]}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                    20 Dec 2021
                </Text>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>


        </>
    );
}
export default Notification;

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
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'lightgrey',
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginTop: 20
    },
    nameDoc: {
        color: '#45B17F',
        fontWeight: "700",
        marginBottom: 7
    }
})