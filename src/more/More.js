import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function More({ navigation }) {
    return (
        <>
            <View style={styles.view}>
                <TouchableOpacity style={styles.name} onPress={() => navigation.navigate('BusinessInfo')}>
                    <Icon size={20} color={'black'} name="chevron-back-outline" />
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                    Business Info
                </Text>
            </View>

            <TouchableOpacity style={styles.name1} onPress={() => navigation.navigate('BusinessInfo')}>
                <Text style={{ color: 'grey', fontSize: 16, fontWeight: "300" }}>
                    Business Information
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.name1} onPress={() => navigation.navigate('PersonalList')}>
                <Text style={{ color: 'grey', fontSize: 16, fontWeight: "300" }}>
                    Personal List
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.name1} onPress={() => navigation.navigate('AddService')}>
                <Text style={{ color: 'grey', fontSize: 16, fontWeight: "300" }}>
                    Add Secretarial Service
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.name1} onPress={() => navigation.navigate('Profile')}>
                <Text style={{ color: 'grey', fontSize: 16, fontWeight: "300" }}>
                    Profile
                </Text>
            </TouchableOpacity>


        </>
    );
}
export default More;

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