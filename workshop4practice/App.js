import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import createBottomTabNavigator
import About from './components/About';
import CoursesListScreen from './components/Home';


const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Courses List" component={CoursesListScreen} options={{
          title: 'Courses List', // Optionally set the title for the header
        }} />
        <Tab.Screen name="About Page" component={About} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
