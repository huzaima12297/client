
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onBoarding from './src/auth/OnBoarding'
import Login from './src/auth/Login'
import Signup from './src/auth/Signup'
import Verification from './src/auth/Verification'
import CompanyDetails from './src/auth/CompanyDetails'
import Dashboard from './src/dashboard/Dashboard'
import EDitCompanyProfile from './src/more/EDitCompanyProfile';
import { LogBox } from 'react-native';
import BusinessInfo from './src/more/BusinessInfo';
import PersonalList from './src/more/PersonalList';
import AddService from './src/more/AddService';
import Profile from './src/more/Profile'
import ChangePassword from './src/more/ChangePassword';
import ResetPassword from './src/more/ResetPassword';
import Notification from './src/more/Notification';
import ForgotPassword from './src/auth/ForgotPassword'
import AddDoc from './src/dashboard/finance/AddDoc';
import EditDoc from './src/dashboard/finance/EDitDoc';
import SeeAllNews from './src/dashboard/SeeAllNews';
import SeeAllProm from './src/dashboard/SeeAllProm';

const Stack = createNativeStackNavigator();
function App() {
  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      >
        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Home" component={onBoarding} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Login" component={Login} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Signup" component={Signup} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Verification" component={Verification} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="CompanyDetails" component={CompanyDetails} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Dashboard" component={Dashboard} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="BusinessInfo" component={BusinessInfo} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="EDitCompanyProfile" component={EDitCompanyProfile} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="PersonalList" component={PersonalList} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="AddService" component={AddService} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Profile" component={Profile} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="ChangePassword" component={ChangePassword} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="ResetPassword" component={ResetPassword} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="Notification" component={Notification} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="AddDoc" component={AddDoc} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="EditDoc" component={EditDoc} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="SeeAllProm" component={SeeAllProm} />

        <Stack.Screen screenOptions={{ headerShown: false }}
          name="SeeAllNews" component={SeeAllNews} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;