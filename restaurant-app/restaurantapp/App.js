import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import AuthScreen from './components/AuthScreen';
import UserProfile from './components/UserProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        setUser(token );
      }
    };

    fetchToken();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        {user ? (
          <>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
          </>
        ) : (
          <Tab.Screen name="AuthScreen" component={AuthScreen} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;




