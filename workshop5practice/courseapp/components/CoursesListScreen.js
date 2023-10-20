import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesList from './CoursesList';
import CourseDetails from './CourseDetails';
import AddReview from './AddReview';
import AddCourse from './AddCourse';

const Stack = createNativeStackNavigator();

const CoursesListScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CoursesList" component={CoursesList} options={{
          headerShown: false
        }} />
      <Stack.Screen name="AddCourse" component={AddCourse} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="AddReview" component={AddReview} />
    </Stack.Navigator>
  );
};

export default CoursesListScreen;