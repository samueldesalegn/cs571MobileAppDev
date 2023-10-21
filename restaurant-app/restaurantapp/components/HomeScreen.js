import React from 'react';
import { View, Text, Button } from 'react-native';
import ListFoods from './ListFoods';
import DailyNotes from './DailyNotes';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <ListFoods />
      <DailyNotes />
      <Button title="Go Back" onPress={goBack} />
    </View>
  );
};

export default HomeScreen;




