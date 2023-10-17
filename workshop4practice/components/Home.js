import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDetails from './CourseDetails';
import CoursesList from './CoursesList';
import AddReview from './AddReview';

const Stack = createNativeStackNavigator();

const CoursesListScreen = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesList} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Navigator>
  );
};

export default CoursesListScreen;
