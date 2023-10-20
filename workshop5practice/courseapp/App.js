import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import About from './components/About';
import CoursesListScreen from './components/CoursesListScreen';
import Login from './components/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a JWT token is stored in AsyncStorage
    async function checkAuthentication() {
      const token = await AsyncStorage.getItem('jwtToken');
      if (token) {
        // Token is present, user is logged in
        setIsLoggedIn(true);
      } else {
        // Token is not present, user is not logged in
        setIsLoggedIn(false);
      }
    }

    checkAuthentication();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {isLoggedIn ? (
          <Tab.Screen name="Courses List" component={CoursesListScreen} options={{ headerShown: false }} />
        ) : (
          <Tab.Screen name="Login" component={Login} />
        )}
        <Tab.Screen name="About Us" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

