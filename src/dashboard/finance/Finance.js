import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import images from '../../themes/Images'
import Icon from 'react-native-vector-icons/Ionicons';
import Profit from './Profit'
import BalanceSheet from './BalanceSheet'
import Documents from './Documents';
import Report from './Report';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


function Finance({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <Profit />;
      case 'second':
        return <BalanceSheet />;
      case 'third':
        return <Documents navigation={navigation} />;
      case 'forth':
        return <Report />;

      default:
        return null;
    }
  }

  const [routes] = React.useState([
    { key: 'first', title: 'Profit & loss' },
    { key: 'second', title: 'Balance Sheet' },
    { key: 'third', title: 'Documents' },
    { key: 'forth', title: 'Reports' },
  ]);

  const layout = useWindowDimensions();

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
          Finance
        </Text>

        <Icon name="notifications-outline" size={20} color={'#45B17F'} />

        <Image source={images.dummyUser} style={styles.userImage} />
      </View>

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        swipeEnabled={false}
      />

    </View >
  );
}
export default Finance;

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