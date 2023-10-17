import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Stars from './Stars';

const Course = ({ data }) => {
  const { title, faculty, code, rating, description, image } = data;
  const navigation = useNavigation();

  const handleDetailsPress = () => {
    // Navigate to CourseDetails and pass the course data
    navigation.navigate('CourseDetails', { courseData: data });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={rating} />
        </View>

        <View style={styles.course}>
          <Text>{title}</Text>
          <Text style={styles.faculty}>{code} - {faculty}</Text>
        </View>

        <View style={styles.detailsButton}>
          <TouchableHighlight
            onPress={handleDetailsPress}
            style={styles.button}
            underlayColor="#5398DC">
            <Text style={styles.buttonText}>Details</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F3F7',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  stars: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: 'column',
    flex: 8,
  },
  faculty: {
    color: 'grey',
  },
  detailsButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    minWidth: 50,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0066CC',
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#fff',
  },
  buttonText: {
    color: '#0066CC',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Course;


