import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../Api'
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Col,
} from 'react-native-table-component';

function Profit() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectedDate, setselectedDate] = useState("This Year");
  const [tableHead, setTableHead] = useState([]);
  const [tableData, setTableData] = useState([])
  const [widthArr, setWidthArr] = useState([
    180, 120, 120, 120, 120, 120, 120, 120,
  ]);

  var currentMonth = moment().format("MMMM")
  var currentYear = moment().format("YYYY")

  useEffect(() => {
    getProfit()
  }, [])

  const getProfit = async () => {
    const value = await AsyncStorage.getItem('userId');

    setLoader(true)
    try {
      const response = await Api.post(`/profitloss/readfile/139`, {
        year: currentYear,
        month: currentMonth,
      });
      console.log("seeProfit", response)
      if (response.status == 200) {
        setShowErr(false)
        setTableHead(response.data.data[0])
        setTableData(response.data.data.slice(1))
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
    <ScrollView style={{
      flex: 1, marginBottom: 10, marginHorizontal: 20,
    }}>

      <Text style={styles.heading}>Profit & Loss</Text>

      <TouchableOpacity onPress={() => setShow(true)}>
        <Text style={styles.year}>{selectedDate}</Text>
      </TouchableOpacity>

      {showErr &&
        <View style={styles.upload}>
          <Text>No Profile & Loss made yet</Text>
        </View>
      }

      {!showErr && <>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>

          <Table
            borderStyle={{
              borderWidth: 1,
              borderColor: '#E4E4E4',
              borderRadius: 15,
            }}>
            <Row
              data={tableHead}
              // widthArr={widthArr}
              style={styles.header}
              textStyle={styles.headertext}
            />


            <TableWrapper style={styles.wrapper}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[styles.row]}
                  textStyle={{ fontSize: 11, color: '#151515', padding: 5 }}
                />
              ))}
            </TableWrapper>
          </Table>
        </ScrollView>
      </>}

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
    </ScrollView>
  );
}
export default Profit;

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
    flex: 1,
    marginTop: 50
  },
  header: {
    height: 50,
    backgroundColor: '#ACCBAD',
  },
  headertext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#151515',
  },

})