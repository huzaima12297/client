import React , {useEffect} from 'react';
import { StyleSheet, BackHandler, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../dashboard/Home'
import Finance from '../dashboard/finance/Finance'
import Secretarial from '../secretarial/Secretarial';
import More from '../more/More';
import AddService from '../more/AddService'

const Tab = createBottomTabNavigator();

function Dashboard() {  
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: styles.navigator,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
    }}
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="Finance" component={Finance}
        options={{
          tabBarLabel: 'Finance',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="document-text-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="AddService" component={AddService}
        options={{
          tabBarLabel: () => null,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="add-circle" color={color} size={50} />
          ),
        }}
      />

      <Tab.Screen name="Secretarial" component={Secretarial}
        options={{
          tabBarLabel: 'Secretarial',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="document-text-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen name="More" component={More}
        options={{
          tabBarLabel: 'More',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="ellipsis-vertical-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Dashboard

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: '#45B17F',
    height: 55

  }
})