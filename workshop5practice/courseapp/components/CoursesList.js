import React, { useState } from 'react';
import { StyleSheet, Platform, SafeAreaView, FlatList, TextInput, Button } from 'react-native';
import Course from './Course';
import Header from './Header.ios';
import { useNavigation } from '@react-navigation/native';
import AddCourse from './AddCourse';


const data = [
  { title: 'Web Application Programming', faculty: 'Asaad Saad', code: 'CS472', rating: 4 },
  { title: 'Modern Web Application', faculty: 'Asaad Saad', code: 'CS572', rating: 5 },
  { title: 'Enterprise Architecture', faculty: 'Joe Bruen', code: 'CS557', rating: 4 },
  { title: 'Algorithms', faculty: 'Clyde Ruby', code: 'CS421', rating: 5 },
  { title: 'Object Oriented JavaScript', faculty: 'Keith Levi', code: 'CS372', rating: 3 },
  { title: 'Big Data', faculty: 'Prem Nair', code: 'CS371', rating: 5 },
  { title: 'Web Application Architecture', faculty: 'Rakesh Shrestha', code: 'CS377', rating: 5 },
  { title: 'Big Data Analytics', faculty: 'Mrudula Mukadam', code: 'CS378', rating: 5 },
];

export default function CoursesList() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const filteredData = data.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: Platform.OS === 'android' ? 30 : 0,
      }}
    >
      <Header />
      <TextInput
        style={styles.input}
        placeholder="Search for a course..."
        onChangeText={setSearch}
        value={search}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Course data={item} />}
      />
      <Button
        title="AddCourse"
        onPress={() => navigation.navigate('AddCourse')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5',
    marginBottom: 10, // Add margin to separate from the list
  },
});

