import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api, {Api2} from '../../Api'
import Icon from 'react-native-vector-icons/Ionicons';

function BalanceSheet() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [loader, setLoader] = useState(false);
    const [selectedDate, setselectedDate] = useState("This Year");
    var currentMonth = moment().format("MMMM")
    var currentYear = moment().format("YYYY")

    useEffect(() => {
        getProfit()
    }, [])

    const getProfit = async () => {
        const value = await AsyncStorage.getItem('userId');
        setLoader(true)
        try {
            const response = await Api2.post(`/balancesheet/readfile/139`, {
                year: currentYear,
                month: currentMonth,
            });
            console.log("HERE",response)
            if (response.status == 200) {
                setShowErr(false)
            } else {
                setShowErr(true)
            }
        } catch (err) {
            alert('An Error Occured');
            setShowErr(true)
        }
        setLoader(false)
    }

    const showPicker = useCallback((value) => setShow(value), []);
    const onValueChange = useCallback(
        (event, newDate) => {
            const selectedDate = newDate || date;

            showPicker(false);
            setDate(selectedDate);
            currentYear = moment(newDate).format("YYYY")
            currentMonth = moment(newDate).format("MMMM")
            setselectedDate(moment(newDate).format("MMM YYYY"))
            getProfit()
        },
        [date, showPicker],
    );

    return (
        <View style={{
            flex: 1, marginBottom: 10, marginHorizontal: 20,
        }}>

            <Text style={styles.heading}>Balance Sheet</Text>

            <TouchableOpacity onPress={() => setShow(true)}>
                <Text style={styles.year}>{selectedDate}</Text>
            </TouchableOpacity>

            {showErr &&
                <View style={styles.upload}>
                    <Text>There is no document made yet</Text>
                </View>
            }

            {loader && <ActivityIndicator size={'large'} style={styles.upload} />}
            {show && (
                <MonthPicker
                    onChange={onValueChange}
                    value={date}
                    // minimumDate={new Date()}
                    // maximumDate={new Date(2025, 5)}
                    // locale="ko"
                />
            )}
        </View>
    );
}
export default BalanceSheet;

const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        fontSize: 18,
        fontWeight: "600",
        color: "black"
    },
    year: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: "400",
        color: "black"
    },
    upload: {
        alignItems: 'center',
        justifyContent: "center",
        flex: 1
    },
})