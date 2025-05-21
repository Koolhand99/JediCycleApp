import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DiagnoseScreen from './screens/DiagnoseScreen';
import GuidesScreen from './screens/GuidesScreen';
import PartsScreen from './screens/PartsScreen';
import VideosScreen from './screens/VideosScreen';
import ResourcesScreen from './screens/ResourcesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Diagnose" component={DiagnoseScreen} />
        <Tab.Screen name="Guides" component={GuidesScreen} />
        <Tab.Screen name="Parts" component={PartsScreen} />
        <Tab.Screen name="Videos" component={VideosScreen} />
        <Tab.Screen name="Resources" component={ResourcesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
