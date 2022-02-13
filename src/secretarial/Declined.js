import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Document 1',
        name: 'John Doe',
        date: '21/01/21',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Document 1',
        name: 'John Doe',
        date: '21/01/21',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Document 1',
        name: 'John Doe',
        date: '21/01/21',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: 'Document 1',
        name: 'John Doe',
        date: '21/01/21',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        title: 'Document 1',
        name: 'John Doe',
        date: '21/01/21',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Document 1',
        name: 'John Doe',
        date: '21/01/21',
    },

];


const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, backgroundColor: 'white', marginVertical: 10, padding: 15, borderWidth: 1, borderColor: 'lightgrey', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
            <Text style={{ color: 'grey' }}>
                {item.title}
            </Text>
            <Text style={{ color: 'grey' }}>
                Assigned by {item.name}
            </Text>
        </View>

        <Text style={{ color: 'grey', fontSize: 12 }}>
            {item.date}
        </Text>

        <Text style={{ color: 'white', fontSize: 13, backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 3, marginLeft: 7, borderRadius: 7}}>
            DECLINED
        </Text>
    </View>
)


function Declined() {
    return (
        <>
            <View style={styles.view}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600", flex: 1 }}>
                    Document List
                </Text>

                <Icon name='search' size={25} color={'#45B17F'} />
                <Image source={require('../dashboard/setting.png')} style={{ width: 30, heiight: 30, marginLeft: 7 }} />
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </>
    );
}
export default Declined;

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 20
    },
    name: {
        color: 'black',
        fontWeight: "600",
        flex: 1,
        fontSize: 18
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