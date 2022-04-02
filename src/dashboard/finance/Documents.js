import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, FlatList,Linking, TouchableOpacity, useWindowDimensions } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api'
import Icon from 'react-native-vector-icons/Ionicons';

function Documents(props) {
    const [showErr, setShowErr] = useState(false);
    const [loader, setLoader] = useState(false);
    const [documents, setDocument] = useState([]);
    const [refresh, setRefresh] = useState(false);

    // useEffect(() => {
    //     getDocuments()
    // }, [])

    React.useEffect(() => {
        getDocuments();
        const willFocusSubscription = props.navigation.addListener('focus', () => {
            getDocuments();
        });

        return willFocusSubscription;
    }, []);


    const getDocuments = async () => {
        const value = await AsyncStorage.getItem('userId');
        setLoader(true)
        try {
            const response = await Api.post(`/financemanagement/getfdocument/`, {
                userid: value,
            });
            if (response.data.status == 200) {
                if (response.data.data.length > 0) {
                    setShowErr(false)
                    setDocument(response.data.data)
                } else {
                    setShowErr(true)
                }
            } else {
                setShowErr(true)
            }
        } catch (err) {
            alert('An Error Occured');
            setShowErr(true)
        }
        setLoader(false)
    }

    const addDoc = () => {
        props.navigation.navigate('AddDoc')
    }

    const editDoc = (id) => {
        props.navigation.navigate('EditDoc', {
            id
        })
    }

    const renderDocment = ({ item }) => (
        <View style={styles.doc}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => {Linking.openURL(item.document_path)}}>
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
                {/* <Text style={{ color: 'black', padding: 5 }}>{moment(item.updated_on).format("MMM Do YY")}</Text> */}
                <Text style={styles.name}>Uploaded by {item.username}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'black', padding: 5 }}>{moment(item.updated_on).format("MM/d/YY")}</Text>
                <TouchableOpacity onPress={() => { editDoc(item.id) }}>
                    <Icon name="ellipsis-vertical-outline" color={"grey"} size={20} />
                </TouchableOpacity>
            </View>

        </View>
    );


    return (
        <View style={{
            flex: 1, marginBottom: 10, marginHorizontal: 20,
        }}>

            <View style={{
                flexDirection: "row", alignItems: 'center', marginTop: 20,
            }}>
                <Text style={styles.heading}>Documents</Text>

                <TouchableOpacity style={styles.upload1} onPress={addDoc}>
                    <Icon name="cloud-upload-outline" size={40} color={"#45B17F"} />
                </TouchableOpacity>

            </View>

            {showErr &&
                <View style={styles.upload}>
                    <TouchableOpacity onPress={addDoc}>
                        <Icon name="cloud-upload-outline" size={100} color={"#45B17F"} />
                        <Text>Upload Document</Text>
                    </TouchableOpacity>
                </View>
            }

            {!loader && !showErr && <FlatList
                showsVerticalScrollIndicator={false}
                onRefresh={getDocuments}
                refreshing={loader}
                data={documents}
                renderItem={renderDocment}
                keyExtractor={item => item.id}
            />}
            {loader && <ActivityIndicator size={'large'} style={styles.upload} />}
        </View>
    );
}
export default Documents;

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        flex: 1
    },
    doc: {
        backgroundColor: 'white', borderWidth: 1, borderRadius: 10, borderColor: "lightgrey",
        marginVertical: 7,
        padding: 10,
        flexDirection: 'row'
    },
    upload: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1
    },
    title: {
        color: 'black',
        fontWeight: "400",
        fontSize: 17
    },
    name: { color: 'black', paddingTop: 5, color: 'grey', fontSize: 13 }
})