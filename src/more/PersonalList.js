import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import images from '../themes/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import Signed from '../secretarial/Signed'
import All from './All'
import Director from './Director';
import Shareholder from './Shareholder';
var ScrollableTabView = require('react-native-scrollable-tab-view');

// const renderScene = SceneMap({
//     first: New,
//     second: Signed,
//     third: Declined,
//     forth: Docs,
// });


function PersonalList({ navigation }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(true);

    // const [routes] = React.useState([
    //     { key: 'first', title: 'New' },
    //     { key: 'second', title: 'Signed' },
    //     { key: 'third', title: 'Declined' },
    //     { key: 'forth', title: 'Previous Historial Docs' },
    // ]);

    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <View style={styles.view}>
                <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
                    <Icon size={20} color={'black'} name="chevron-back-outline" />
                </TouchableOpacity>

                <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                    Persoonel List
                </Text>
            </View>

            <ScrollableTabView>
                <All tabLabel="All" />
                <Director tabLabel="Director" />
                <Shareholder tabLabel="Shareholder" />
            </ScrollableTabView>
        </View>
    );
}
export default PersonalList;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginHorizontal: 20
    },
    name: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginRight: 20
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
    view: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20
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
    },
    button: { flex: 1, backgroundColor: '#45B17F', paddingVertical: 5, paddingHorizontal: 10, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center' }
})