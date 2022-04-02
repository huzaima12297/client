import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Linking, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api, { FormDataApi } from '../../Api'
import Icon from 'react-native-vector-icons/Ionicons';

function Report(props) {
    const [showErr, setShowErr] = useState(false);
    const [loader, setLoader] = useState(false);
    const [documents, setDocument] = useState([]);
    const [documentTitle, setdocumentTitle] = useState('Add Report')
    const [doc, setDoc] = useState(null)

    useEffect(() => {
        getDocuments()
    }, [])

    const getDocuments = async () => {
        const value = await AsyncStorage.getItem('userId');
        setLoader(true)
        try {
            const response = await Api.post(`/reports/getfile`, {
                user_id: value,
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

    const addDoc = async () => {
        const res = await DocumentPicker.pick({
            type: [DocumentPicker.types.allFiles],
        });
        if (res.length > 0) {
            if (res[0].type == "image/jpeg") {
                alert("Incorrect Document format")
            } else {
                setdocumentTitle(res[0].name)
                setDoc(res[0]);
                uploadDoc()
            }
        } else {
            alert("Select Document")
        }
    }


    const uploadDoc = async () => {
        setLoader(true)
        const value = await AsyncStorage.getItem('userId');
        const data = new FormData();
        data.append('reportFile', doc);
        data.append('filename', doc.name);
        data.append('user_id', value);
        try {
            const response = await FormDataApi.post(`/reports/file`,
                data,
            );
            console.log("reposrt", response)
            if (response.status == 200) {
                alert("Report uploaded.")
                getDocuments()
            } else {
                alert(response.message)
            }
        } catch (err) {
            alert(err);
        }
        setLoader(false)
    }

    const renderDocment = ({ item }) => (
        <TouchableOpacity style={styles.doc} onPress={() => { Linking.openURL(item.filepath) }}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Text style={styles.title}>{item.filename}</Text>
                </TouchableOpacity>
                <Text style={styles.name}>Uploaded by {item.createdby}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'black', padding: 5 }}>{moment(item.createdon).format("MM/d/YY")}</Text>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={{
            flex: 1, marginBottom: 10, marginHorizontal: 20,
        }}>

            <View style={{
                flexDirection: "row", alignItems: 'center', marginTop: 20,
            }}>
                <Text style={styles.heading}>Reports</Text>

                <TouchableOpacity style={styles.upload1} onPress={addDoc}>
                    <Icon name="cloud-upload-outline" size={40} color={"#45B17F"} />
                </TouchableOpacity>

            </View>


            {/* <Text style={styles.heading}>Reports</Text> */}

            {showErr &&
                <TouchableOpacity style={styles.upload} onPress={addDoc}>
                    <Icon name="cloud-upload-outline" size={100} color={"#45B17F"} />
                    <Text>{documentTitle}</Text>
                </TouchableOpacity>
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
export default Report;

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
        fontSize: 14
    },
    name: { color: 'black', paddingTop: 5, color: 'grey', fontSize: 13 }
})