import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import images from '../themes/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import Signed from './Signed'
import New from './New'
import Declined from './Declined';
import Docs from './Docs';
var ScrollableTabView = require('react-native-scrollable-tab-view');
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const renderScene = SceneMap({
    first: New,
    second: Signed,
    third: Declined,
    forth: Docs,
});


function Secretarial({ navigation }) {
    const layout = useWindowDimensions();
    const [index1, setIndex1] = React.useState(true);

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'New' },
        { key: 'second', title: 'Signed' },
        { key: 'third', title: 'Declined' },
        { key: 'forth', title: 'Previous Historial Docs' },
    ]);

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'#45B17F'}
            inactiveColor={'grey'}
            indicatorStyle={{ backgroundColor: '#45B17F' }}
            style={{ backgroundColor: 'white' }}
            labelStyle={{
                fontSize: 10,
                upperCaseLabel: false,

            }}
        />
    );


    return (
        <View style={{ flex: 1, marginBottom: 10 }}>

            <View style={styles.header}>
                <Text style={styles.name}>
                    Secretarial
                </Text>

                <Icon name="notifications-outline" size={20} color={'#45B17F'} />

                <Image source={images.dummyUser} style={styles.userImage} />
            </View>

            <View style={{ flexDirection: 'row', margin: 15, marginTop: 30 }}>

                <TouchableOpacity style={[styles.button, index1 ? { backgroundColor: '#45B17F' } : { backgroundColor: 'white' }]}
                    onPress={() => setIndex(true)}>
                    <Text style={index1 ? { color: 'white' } : { color: 'black' }}>Secretarial Documents</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, !index1 ? { backgroundColor: '#45B17F' } : { backgroundColor: 'white' }]}
                    onPress={() => setIndex1(false)}>
                    <Text style={!index1 ? { color: 'white' } : { color: 'black' }}>ACRA Compliance</Text>
                </TouchableOpacity>
            </View>

            {index1 && <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
            }

            {!index1 &&
                <ScrollView style={{ marginHorizontal: 20 }}>
                    <Text style={{ color: 'black', fontWeight: "600" }}>
                        ACRA Compliance
                    </Text>

                    <Text style={{ color: 'black', marginTop: 10 }}>
                        Enforcement policy statement
                    </Text>

                    <Text style={{ color: 'grey', marginTop: 10 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>

                    <Text style={{ color: 'black', marginTop: 40 }}>
                        Offences of not holding AGM or filing ARs or late or Noot laying upto dates account at AGM
                    </Text>

                    <Text style={{ color: 'grey', marginTop: 10 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </ScrollView>}


        </View>
    );
}
export default Secretarial;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
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
    },
    button: { flex: 1, backgroundColor: '#45B17F', paddingVertical: 5, paddingHorizontal: 10, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center' }
})