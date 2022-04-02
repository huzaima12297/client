import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Col,
} from 'react-native-table-component';
import ModalDownload from './ModalDownload';
import ModalSetting from './ModalSetting';

const noti = require('./notification.png');
const profile = require('./profile.png');
const download = require('./download.png');
const upload = require('./upload.png');
const setting = require('./setting.png');

export default function Finance() {
  const [tabs, setTabs] = useState([
    {
      value: 'Profit & Loss',
    },
    {
      value: 'Balance Sheet',
    },
    {
      value: 'Document',
    },
    {
      value: 'Statitics        ',
    },
    {
      value: 'Balance Sheet',
    },
    {
      value: 'Document',
    },
  ]);
  const [tableHead, setTableHead] = useState([
    '',
    '1910-10-19',
    '1910-10-19',
    '1910-10-19',
    '1910-10-19',
    '1910-10-19',
    '1910-10-19',
    '1910-10-19',
  ]);
  const [tableData, setTableData] = useState([
    [
      'Outlet A Sales (Single Session)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet A Sales (Pack. Sale 2020)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet A Sales (Others)',

      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet A Sales (Pack. Sale adj.)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet B Sales (Single Session)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet B Sales (Pack. Sale 2020)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet B Sales (Pack. Sale 2020)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
    [
      'Outlet B Sales (Pack. Sale 2020)',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
      '$ 110.00',
    ],
  ]);
  const [widthArr, setWidthArr] = useState([
    180, 120, 120, 120, 120, 120, 120, 120,
  ]);

  const [tabLine, setTabLine] = useState('Profit & Loss');
  const [modalSetting, setModalSetting] = useState(false);
  const [modalDownload, setModalDownload] = useState(false);

  const setTabLine1 = (item) => {
    setTabLine(item.value)
  }

  function TextBox(val1, val2) {
    return (
      <View style={styles.headingBox}>
        <Text style={styles.headingBoxText}>{val1}</Text>
        <Text style={styles.headingBoxPrice}>{'$' + val2}</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.HeaderRow}>
        <Text style={styles.Headertext}>Finance</Text>
        <View style={styles.ImageRow}>
          <Image source={noti} style={{marginRight: 10}} />
          <Image source={profile} />
        </View>
      </View>
      <View style={styles.TabRow}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex: 1}}>
          {tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setTabLine(item.value)}
                style={[
                  styles.TabHeadingBtn,
                  {
                    borderBottomWidth: tabLine == item.value ? 2 : 0,
                  },
                ]}>
                <Text
                  style={[
                    styles.TabHeading,
                    {color: tabLine == item.value ? '#151515' : '#707070'},
                  ]}>
                  {item.value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <Text style={styles.Heading}>{tabLine}</Text>
      <Text style={styles.subHeading}>Year End: 31 Dec 2021</Text>
      <View style={styles.Row}>
        <Text style={{color: '#151515', fontSize: 14}}>This Year</Text>
        <View style={styles.ImageRow}>
          <Image source={upload} style={{marginRight: 10}} />
          <TouchableOpacity onPress={() => setModalDownload(true)}>
            <Image source={download} style={{marginRight: 10}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalSetting(true)}>
            <Image source={setting} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {TextBox('Total Revenue', '24,828.68')}
          {TextBox('Cost of Goods Sold', '24,828.68')}
          {TextBox('Gross Profit', '24,828.68')}
          {TextBox('Net Income', '24,828.68')}
        </View>
        <ScrollView horizontal={true}>
          <View style={{borderRadius: 15}}>
            <Table
              borderStyle={{
                borderWidth: 1,
                borderColor: '#E4E4E4',
                borderRadius: 15,
              }}>
              <Row
                data={tableHead}
                widthArr={widthArr}
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
                    textStyle={{fontSize: 11, color: '#151515', padding: 5}}
                  />
                ))}
              </TableWrapper>
            </Table>
          </View>
        </ScrollView>
      </View>
      <ModalDownload
        modalDownload={modalDownload}
        setModalDownload={setModalDownload}
      />
      <ModalSetting
        modalSetting={modalSetting}
        setModalSetting={setModalSetting}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
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
  ImageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TabRow: {
    height: 40,
  },
  TabHeadingBtn: {
    borderColor: '#55A57F',
    paddingHorizontal: '5%',
  },
  TabHeading: {
    fontSize: 13,
    color: '#151515',
  },
  headingBox: {
    width: '45%',
    padding: '5%',
  },
  headingBoxText: {
    color: '#6A6A6A',
    fontSize: 11,
  },
  headingBoxPrice: {
    color: '#151515',
    fontSize: 16,
  },
  Heading: {
    color: '#151515',
    fontSize: 18,
    padding: '5%',
  },
  subHeading: {
    color: '#E23C47',
    fontSize: 14,
    paddingHorizontal: '5%',
  },
  Row: {
    flexDirection: 'row',
    padding: '5%',
    justifyContent: 'space-between',
  },
  main: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderTopEndRadius: 15,
    borderTopLeftRadius: 15,
    borderColor: '#E4E4E4',
    borderWidth: 1,
  },
});
