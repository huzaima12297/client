
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import onBoarding from './src/auth/OnBoarding'
import Login from './src/auth/Login'
import Signup from './src/auth/Signup'
import Verification from './src/auth/Verification'
import CompanyDetails from './src/auth/CompanyDetails'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen screenOptions={{headerShown: false}}
          name="Home" component={onBoarding} />

        <Stack.Screen screenOptions={{headerShown: false}}
          name="Login" component={Login} />

        <Stack.Screen screenOptions={{headerShown: false}}
          name="Signup" component={Signup} />

        <Stack.Screen screenOptions={{headerShown: false}}
          name="Verification" component={Verification} />

        <Stack.Screen screenOptions={{headerShown: false}}
          name="CompanyDetails" component={CompanyDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;