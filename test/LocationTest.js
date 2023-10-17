import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

export default function LocationTest() {
  const [loading, setLoading] = useState(true); // Start with loading set to true
  const [error, setError] = useState(null);

  useEffect(() => {
    async function requestPermission() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          // Permission granted, you can now access the user's location
          setLoading(false); // Set loading to false
        } else {
          setError('Location permission denied');
          setLoading(false); // Set loading to false
        }
      } catch (error) {
        setLoading(false);
        setError('Cannot access the location');
      }
    }

    // Call the permission request function
    requestPermission();
  }, []);

  // Render the component based on the loading state
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If loading is false, show the result
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {error ? <Text>{error}</Text> : <Text>Location permission granted</Text>}
    </View>
  );
}
