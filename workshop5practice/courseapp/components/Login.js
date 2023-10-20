import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState(''); // Replace "username" with "email"
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://your-backend-url/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Use "email" instead of "username"
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Store the token securely
        await AsyncStorage.setItem('jwtToken', token);

        // Redirect to the logged-in state (navigate to the course adding screen)
        navigation.navigate('AddCourse'); // Adjust the navigation route as needed
      } else {
        // Handle login error
        console.error('Login error:', response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Network error:', error);
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email" // Replace "Username" with "Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

