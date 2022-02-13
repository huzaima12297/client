import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import Images from '../themes/Images'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

function Home({ navigation }) {
  const DATA = [
    {
      id: 1,
      name: 'Document Name',
      date: '03 Mar 2021',
    },
    {
      id: 2,
      name: 'Document Name',
      date: '03 Mar 2021',
    },
    {
      id: 3,
      name: 'Document Name',
      date: '03 Mar 2021',
    },
  ];

  const DATAX = [
    {
      id: 1,
      doc: 'Document Type',
      name: 'ACRA Obligations',
      type: 'All Director',
      year: '31/02/2021',
      period: '01/02/2121 - 05/02/2021',
      due: '05/11/2021',
    },
    {
      id: 2,
      doc: 'Document Type',
      name: 'ACRA Obligations',
      type: 'All Director',
      year: '31/02/2021',
      period: '01/02/2121 - 05/02/2021',
      due: '05/11/2021',
    },
    {
      id: 3,
      doc: 'Document Type',
      name: 'ACRA Obligations',
      type: 'All Director',
      year: '31/02/2021',
      period: '01/02/2121 - 05/02/2021',
      due: '05/11/2021',
    },
  ];

  const DATAXX = [
    {
      id: 1,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 2,
      name: 'Secretarial',
      icon: "document-text-outline",
    },
  ];

  const DATAXXx = [
    {
      id: 1,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 2,
      name: 'Secretarial',
      icon: "document-text-outline",
    },
    {
      id: 3,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 4,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 5,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 6,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 7,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 8,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 9,
      name: 'Finance',
      icon: "document-text-outline",
    },
    {
      id: 10,
      name: 'Finance',
      icon: "document-text-outline",
    },
   
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={{ flex: 1 }}>
        <Text style={styles.nameDoc}>{item.name}</Text>
        <Text style={{ fontSize: 12 }}>Uploaded on</Text>
        <Text style={{ color: 'black', fontWeight: "600" }}>{item.date}</Text>
      </View>

      <Icon name="chevron-forward-outline" size={25} />
    </View>
  );

  const renderItemX = ({ item }) => (
    <View style={[styles.item, { flexDirection: 'column', alignItems: 'flex-start', width: 300 }]}>
      <Text style={{ color: 'grey', fontSize: 11 }}>{item.doc}</Text>
      <Text style={{ fontSize: 17, color: 'black', fontWeight: "700", marginTop: 5 }}>{item.name}</Text>
      <Text style={{ color: 'black', fontWeight: "600" }}>{item.date}</Text>

      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ flex: 1, color: 'black', fontWeight: "500", marginRight: 20 }}>
          Entity Type
        </Text>
        <Text style={{ flex: 1, color: 'grey' }}>
          {item.type}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ flex: 1, color: 'black', fontWeight: "500", marginRight: 20 }}>
          Financial End Year
        </Text>
        <Text style={{ flex: 1, color: 'grey' }}>
          {item.year}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={{ flex: 1, color: 'black', fontWeight: "500", marginRight: 20 }}>
          Financial Period Covered
        </Text>
        <Text style={{ flex: 1, color: 'grey' }}>
          {item.period}
        </Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ flex: 1, color: 'black', fontWeight: "500", marginRight: 20 }}>
          Due Dates
        </Text>
        <Text style={{ flex: 1, color: 'red' }}>
          {item.due}
        </Text>
      </View>

    </View>
  );

  const renderItemXX = ({ item }) => (
    <View style={[styles.item, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 200 }]}>
      <Icon name={item.icon} color={'green'} size={25} />
      <Text style={{ color: 'black', fontWeight: "700", marginLeft: 15 }}>{item.name}</Text>
    </View>
  );

  const renderItemNews = ({ item }) => (
    <View style={[styles.item, { alignItems: 'center', justifyContent: 'center', width: 300, height: 150, borderRadius: 20 }]}>
      <Image source={Images.dummy1} style={{ width: 300, height: 150, borderRadius: 20 }} />

      <View style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.7)', width: 300, flexDirection: 'row' }}>
        <Text style={{ color: 'white', padding: 5, flex: 1 }}>Name of event/ news</Text>
        <Text style={{ color: 'white', padding: 5 }}>16 Mar 2021</Text>
      </View>
    </View>
  );

  const renderItemPro = ({ item }) => (
    <View style={[styles.item, { alignItems: 'center', justifyContent: 'center', width: 300, height: 150, borderRadius: 20 }]}>
      <Image source={Images.dummy2} style={{ width: 300, height: 150, borderRadius: 20 }} />

      <View style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0,0,0,0.7)', width: 300, flexDirection: 'row' }}>
        <Text style={{ color: 'white', padding: 5, flex: 1 }}>Name of event/ news</Text>
        <Text style={{ color: 'white', padding: 5 }}>16 Mar 2021</Text>
      </View>
    </View>
  );

  const renderItem10 = ({ item }) => (
    <View style={{ borderRadius: 20, flexDirection: 'row', padding: 15}}>
        <Text>{item.id}.</Text>
        <Text style={{marginLeft: 30}}>Debator A</Text>
        <Text style={{marginLeft: 60}}>10 days</Text>

    </View>
  );

  const pieData = [
    {
      name: "A Revenue",
      population: 21500000,
      color: "#DC143C",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "B Revenue",
      population: 2800000,
      color: "#f5c71a",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "C Revenue",
      population: 2800000,
      color: "#2e8b57",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },

  ];

  const chartConfig = {
    backgroundGradientFrom: "red",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "black",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}
      style={{ flex: 1, marginBottom: 10 }}>
      <View style={styles.header}>
        <Text style={styles.name}>
          Smitiv Company
        </Text>

        <Icon name="notifications-outline" size={20} color={'#45B17F'} />

        <Image source={Images.dummyUser} style={styles.userImage} />
      </View>

      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <Text style={{ color: 'grey' }}>Welcome</Text>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 18, marginVertical: 3 }}>
          Christophir Smith
        </Text>
        <Text style={{ color: 'grey', fontSize: 12 }}>Admit at AES Technology</Text>
      </View>

      <View style={styles.meeting}>
        <Text style={{ color: 18, color: 'grey', fontWeight: "600" }}>Meeting Schedule was Made</Text>
        <Text style={{ color: 'grey', fontSize: 13, marginTop: 15 }}>Meeting Type</Text>
        <Text style={{ color: '#45B17F', fontSize: 13, marginTop: 5, fontWeight: "500" }}>Meeting Time Here</Text>

        <Text style={{ color: 'black', marginTop: 15, fontWeight: "700" }}>Mon 12 April, 2021</Text>
        <Text style={{ color: 'black', marginTop: 0, fontWeight: "700" }}>10:00 AM - 11:00 AM (SGT)</Text>

        <Text style={{ color: '#45B17F', fontSize: 13, marginTop: 15, fontWeight: "700", textDecorationLine: 'underline' }}>Add to Calendar</Text>

        <Text style={{ color: 'grey', marginTop: 15, fontSize: 12 }}>This is meeting description. Sed ut prespicasion Unde</Text>
      </View>

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Unsigned Secretarial Document</Text>
        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>See All</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Unsigned Secretarial Document</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATAX}
        renderItem={renderItemX}
        keyExtractor={item => item.id}
      />

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>What do you want to do</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATAXX}
        renderItem={renderItemXX}
        keyExtractor={item => item.id}
      />

      <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1, marginHorizontal: 20, marginTop: 35 }}>
        Take a look at your program
      </Text>

      <Text style={{ color: 'grey', fontWeight: "100", fontSize: 12, flex: 1, marginHorizontal: 20, marginTop: 5 }}>
        Some Text
      </Text>

      <View style={{ marginVertical: 40, marginHorizontal: 20 }}>
        <Button title="Customer Royalty Program" />
      </View>

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>News & Events</Text>
        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>See All</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATAXX}
        renderItem={renderItemNews}
        keyExtractor={item => item.id}
      />

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Promotion</Text>
        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>See All</Text>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATAXX}
        renderItem={renderItemPro}
        keyExtractor={item => item.id}
      />

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Revenue by Month</Text>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 15, marginBottom: 20 }}>

        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40, paddingVertical: 15, backgroundColor: '#45B17F', borderRadius: 15, marginRight: 3 }}>
          <Text style={{ color: 'white' }}>Revenue</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40, paddingVertical: 15, borderWidth: 1, borderRadius: 15, marginLeft: 3, borderColor: '#45B17F' }}>
          <Text>Expenses</Text>
        </TouchableOpacity>
      </View>

      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(69,177,127, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(100, 100, 100, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "0",
            strokeWidth: "1",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Types of Revenue</Text>
      </View>

      <View style={{ marginBottom: 20, marginTop: 10 }}>
        <PieChart
          data={pieData}
          width={Dimensions.get("window").width}
          height={250}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"white"}
          paddingLeft={"15"}
        />
      </View>

      <View style={styles.header}>
        <Text style={{ color: 'black', fontWeight: "700", fontSize: 16, flex: 1 }}>Top 10 debators</Text>
        <Text style={{ color: '#45B17F', fontSize: 13, fontWeight: "500" }}>Average due days</Text>
      </View>

      <FlatList
        style={{backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgrey', marginHorizontal: 20, marginTop: 15, borderRadius: 15}}
        showsHorizontalScrollIndicator={false}
        data={DATAXXx}
        renderItem={renderItem10}
        keyExtractor={item => item.id}
      />

    </ScrollView>
  );
}
export default Home;

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
  }
})