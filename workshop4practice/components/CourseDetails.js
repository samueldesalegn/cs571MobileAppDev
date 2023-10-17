import React from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Stars from './Stars';

const CourseDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { courseData } = route.params;
  const { title, faculty, code, rating } = courseData

  // console.log(courseData);

  const handleAddReviewPress = () => {
    navigation.navigate('AddReview');
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: courseData.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.faculty}>{faculty}</Text>
      <Text style={styles.description}>{code}</Text>
      <View style={styles.stars}>
          <Stars rating={rating} />
        </View>
      <Button title="Add Review" onPress={handleAddReviewPress} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faculty: {
    color: 'grey',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default CourseDetails;





