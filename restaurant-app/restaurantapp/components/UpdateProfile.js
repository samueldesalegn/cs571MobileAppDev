import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { getUser, updateProfile } from '../network';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const UpdateProfile = ({ route, navigation }) => {
  const [user, setUser] = useState({});
  const [editedUser, setEditedUser] = useState({});
  const [token, setToken] = useState(null);
  const id = "6532c8f0965a6d3d38f56222";

  const { email } = user;

  const fetchData = async () => {
    // Fetch the user's existing information
    const storedToken = await AsyncStorage.getItem('token');
    setToken(storedToken);

    const userProfileResponse = await getUser(id, storedToken);

    if (userProfileResponse.success) {
      const userProfile = userProfileResponse.data.user;
      setUser(userProfile);
      setEditedUser({ ...userProfile });
    } else {
      Alert.alert(`Error: ${userProfileResponse.error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateProfile = async () => {
    try {
      const updatedProfile = await updateProfile(editedUser, token);
  
      if (updatedProfile.success) {
        // Update user information in AsyncStorage
        await AsyncStorage.setItem('userProfile', JSON.stringify(editedUser));
        Alert.alert('Profile updated successfully');
        
        // Navigate back to the PersonalProfile screen
        navigation.navigate('PersonalProfile');
      } else {
        Alert.alert(`Error: ${updatedProfile.error}`);
      }
    } catch (error) {
      Alert.alert('Error: Profile update failed');
      console.error(error);
    }
  };
  

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email: {email}</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={editedUser.fullName || ''}
        onChangeText={(text) => setEditedUser({ ...editedUser, fullName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={editedUser.phoneNumber || ''}
        onChangeText={(text) => setEditedUser({ ...editedUser, phoneNumber: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={editedUser.address || ''}
        onChangeText={(text) => setEditedUser({ ...editedUser, address: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={editedUser.newPassword || ''}
        onChangeText={(text) => setEditedUser({ ...editedUser, newPassword: text })}
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default UpdateProfile;











