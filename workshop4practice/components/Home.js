import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';
import AddReview from './AddReview';

const Stack = createNativeStackNavigator();

const CoursesListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesList} options={{
          headerShown: false
        }} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Navigator>
  );
};

export default CoursesListScreen;


