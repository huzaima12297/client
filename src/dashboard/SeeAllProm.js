import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import Api from '../Api'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons';

function SeeAllProm({ navigation }) {

    const [promotions, setPromotions] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        getPromotions()
    }, [])

    const getPromotions = async () => {
        try {
            const response = await Api.get('/promotions');
            if (response.status == 200) {
                setPromotions(response.data.results)
            } else {
                alert('An Error Occured');
            }
        } catch (err) {
            alert('An Error Occured');
        }
    }

    const renderItemNews = ({ item }) => (
        <View style={{ marginHorizontal: 20, marginTop: 15 }}>
            <ImageBackground
                resizeMode='center'
                source={{
                    uri: item.display_image,
                }}
                style={styles.item}>
            </ImageBackground>

            <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', flexDirection: 'row' }}>
                <Text style={{ color: 'white', padding: 5, flex: 1 }}>{item.title}</Text>
                <Text style={{ color: 'white', padding: 5 }}>{moment(item.updated_on).format("MMM Do YY")}</Text>
            </View>

            <Text style={{ color: "grey", marginTop: 15 }}> • {item.body}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1, }}>

            {loader && <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator color={"#45B17F"} />
            </View>}

            {!loader && <>
                <View style={styles.view}>
                    <TouchableOpacity style={styles.name} onPress={() => navigation.goBack()}>
                        <Icon size={20} color={'black'} name="chevron-back-outline" />
                    </TouchableOpacity>

                    <Text style={{ color: 'black', fontSize: 16, fontWeight: "600" }}>
                        Promotion
                    </Text>
                </View>

                <FlatList
                    data={promotions}
                    renderItem={renderItemNews}
                    keyExtractor={item => item.id}
                    style={{ marginBottom: 30 }}
                />

            </>}
        </View>
    );
}
export default SeeAllProm;

const styles = StyleSheet.create({
    header: {
        flex: 1,
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
        marginTop: 10,
        alignSelf: 'stretch',
        height: 170,
        borderColor: 'lightgrey',
        alignItems: 'center',
        backgroundColor: "white"
    },
    nameDoc: {
        color: '#45B17F',
        fontWeight: "700",
        marginBottom: 7
    },
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

})