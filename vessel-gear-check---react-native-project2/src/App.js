import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';r
import Dashboard from './components/screens/Dashboard';
import RolesScreen from './components/screens/RolesScreen';
import ChecklistScreen from './components/screens/ChecklistScreen';
import VisualizationScreen from './components/screens/VisualizationScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import DrawerContent from './DrawerContent'; // Import DrawerContent

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Authentication stack navigator
const AuthStack = () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={Login} options={{ headerTransparent: true, headerTintColor: '#E1E1E1' }} />
    <Stack.Screen name="Signup" component={Signup} options={{ headerTransparent: true, headerTintColor: 'white' }} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerTransparent: true, headerTintColor: 'white' }} />
  </Stack.Navigator>
);

// Dashboard drawer navigator
const DashboardDrawer = () => (
  <Drawer.Navigator initialRouteName="MainDashboard" drawerContent={DrawerContent}>
    <Drawer.Screen name="MainDashboard" component={Dashboard} options={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#fff' }} />
    <Drawer.Screen name="Roles" component={RolesScreen} options={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#fff' }} />
    <Drawer.Screen name="Checklist" component={ChecklistScreen} options={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#fff' }} />
    <Drawer.Screen name="Visualization" component={VisualizationScreen} options={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#fff' }} />
    <Drawer.Screen name="Settings" component={SettingsScreen} options={{ headerStyle: { backgroundColor: '#333' }, headerTintColor: '#fff' }} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardDrawer} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
