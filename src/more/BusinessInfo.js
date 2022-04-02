import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import {
    Table,
    Row,
    Rows,
    TableWrapper,
    Col,
} from 'react-native-table-component';

function BusinessInfo({ navigation }) {
    const [index, setIndex] = React.useState(true);
    const [uenNumber, setuenNumber] = React.useState("");
    const [tax, setTax] = React.useState("");
    const [home, setHome] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [date, setDate] = React.useState("");
    const [year, setYear] = React.useState("");
    const [name, setName] = React.useState("");

    const [tableHead, setTableHead] = useState([
        'Email',
        'Director Name',
        'Position',
    ]);
    const [tableData, setTableData] = useState([
        [
            'Director@hmail.com',
            'Joseph word',
            'Director 1',
        ],
        [
            'Director@hmail.com',
            'Joseph word',
            'Director 1',

        ],
        [
            'Director@hmail.com',
            'Joseph word',
            'Director 1',

        ],
    ]);

    const [tableData1, setTableData1] = useState([
        [
            'Director@hmail.com',
            'Joseph word',
            'Individual',
        ],
        [
            'Director@hmail.com',
            'Joseph word',
            'Individual',

        ],
        [
            'Director@hmail.com',
            'Joseph word',
            'Individual',

        ],
    ]);
    const [widthArr, setWidthArr] = useState([
        120, 120, 120,
    ]);

    const [widthArr1, setWidthArr1] = useState([
        120, 120, 120
    ]);

    const [tableHead1, setTableHead1] = useState([
        '',
        'Revenue',
        'Sales',
    ]);

    const [tableData2, setTableData2] = useState([
        [
            'Jan',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Feb',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Mar',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Apr',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'May',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Jun',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Jan',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Jul',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Aug',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Sept',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Nov',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            'Dec',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
    ]);


    const [tableHead2, setTableHead2] = useState([
        '',
        'Profit & Loss',
        'Balance Sheet',
    ]);

    const [tableData3, setTableData3] = useState([
        [
            '2010',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2011',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2012',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2013',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2014',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2015',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2016',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2017',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2018',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2019',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
        [
            '2020',
            '$ 11.00',
            '$ 11.00',
            '$ 11.00',
        ],
    ]);


    return (
        <>
            <ScrollView>
                <View style={styles.view}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: "600", flex: 1 }}>
                        Company | personal Profile
                    </Text>

                    <Icon name="notifications-outline" color={'#45B17F'} size={20} />
                    <TouchableOpacity onPress={() => navigation.navigate('EDitCompanyProfile')}>
                        <Icon name="eyedrop-outline" color={'#45B17F'} size={20} style={{ marginLeft: 15 }} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', margin: 15, marginTop: 30 }}>

                    <TouchableOpacity style={[styles.button, index ? { backgroundColor: '#45B17F' } : { backgroundColor: 'white' }]}
                        onPress={() => setIndex(true)}>
                        <Text style={index ? { color: 'white' } : { color: 'black' }}>Business Info</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, !index ? { backgroundColor: '#45B17F' } : { backgroundColor: 'white' }]}
                        onPress={() => setIndex(false)}>
                        <Text style={!index ? { color: 'white' } : { color: 'black' }}>Company overview</Text>
                    </TouchableOpacity>
                </View>

                {index && <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: "600", }}>
                        {name}
                    </Text>
                    <Text style={{ color: 'grey', fontSize: 12 }}>
                        Technology industry
                    </Text>

                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            UEN Number
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {uenNumber}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            Tax ID Number
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {tax}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            Home Jurisdiction
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {home}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            Office Address
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {address}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            Formation Date
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {date}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            Fiscal Year End
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {year}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 15, marginBottom: 25 }}>
                        <Text style={{ color: 'black', fontSize: 14, fontWeight: "600", flex: 1 }}>
                            Public
                        </Text>

                        <Text style={{ color: 'grey', fontSize: 14 }}>
                            {name}
                        </Text>
                    </View>

                    <Button title="View AGM Resolution" />

                    <View style={styles.header}>
                        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Directors</Text>
                        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>See All</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#E4E4E4',
                                borderRadius: 15,
                            }}>
                            <Row
                                data={tableHead}
                                widthArr={widthArr}
                                style={styles.header1}
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

                    <View style={styles.header}>
                        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Shareholders</Text>
                        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>See All</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#E4E4E4',
                                borderRadius: 15,
                            }}>
                            <Row
                                data={tableHead}
                                widthArr={widthArr}
                                style={styles.header1}
                                textStyle={styles.headertext}
                            />

                            <TableWrapper style={styles.wrapper}>
                                {tableData1.map((rowData, index) => (
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
                </View>}

                {!index && <View style={{ marginHorizontal: 20 }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: "600", }}>
                        Business overview
                    </Text>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#E4E4E4',
                                borderRadius: 15,
                            }}>
                            <Row
                                data={tableHead1}
                                widthArr={widthArr1}
                                style={styles.header1}
                                textStyle={styles.headertext}
                            />

                            <TableWrapper style={styles.wrapper}>
                                {tableData2.map((rowData, index) => (
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


                    <Button title="View AGM Resolution" customStyle={{ backgroundColor: '#FFDB58' }} />

                    <View style={styles.header}>
                        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Financial Service</Text>
                        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>See All</Text>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#E4E4E4',
                                borderRadius: 15,
                            }}>
                            <Row
                                data={tableHead1}
                                widthArr={widthArr}
                                style={styles.header1}
                                textStyle={styles.headertext}
                            />

                            <TableWrapper style={styles.wrapper}>
                                {tableData3.map((rowData, index) => (
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
                </View>}

            </ScrollView>
        </>
    );
}
export default BusinessInfo;

const styles = StyleSheet.create({
    view: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: 'center'
    },
    name: {
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 18,
        marginTop: 15,
        borderRadius: 10
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 20
    },
    header1: {
        height: 50,
        backgroundColor: '#ACCBAD',
    },
    headertext: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#151515',
    },
    dataWrapper: {
        marginTop: -1,
    },
    row: {
        height: 40,
        backgroundColor: '#FFFFFF',
    },
    HeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '5%',
    },
    Headertext: {
        fontSize: 18,
        color: '#151515',
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
    button: { flex: 1, backgroundColor: '#45B17F', paddingVertical: 15, paddingHorizontal: 10, marginHorizontal: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }

})