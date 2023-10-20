import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddReview = ({ route: { params } }) => {
  const { courseData } = params;// Things here to do
  const { faculty } = courseData;

  const [state, setState] = useState({
    faculty: '',
    rating: 0,
    review: '',
    submitting: false,
  });

  const [starColors, setStarColors] = useState(['grey', 'grey', 'grey', 'grey', 'grey']);

  const setRating = (rating) => {
    setState({ ...state, rating });
    setStarColors([...Array(5)].map((_, i) => (i < rating ? '#FFD64C' : 'grey')));
  };

  const inputName = (text) => {
    setState({ ...state, faculty: text });
  };

  const inputReview = (text) => {
    setState({ ...state, review: text });
  };

  const handleReviewSubmit = () => {
    // Set submitting to true
    setState({ ...state, submitting: true });

    // Simulate submission
    setTimeout(() => {
      // Set submitting to false after submission
      setState({ ...state, submitting: false });
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.addReview}>Add Review</Text>
      <TextInput onChangeText={inputName} value={faculty} style={styles.input} />
      <Text>Your Rating</Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <Icon
            key={rating}
            name="star"
            size={20}
            onPress={() => setRating(rating)}
            color={starColors[rating - 1]}
          />
        ))}
      </View>
      <TextInput value={state.review} onChangeText={inputReview} multiline placeholder="Review" style={styles.input} />
      {state.submitting ? (
        <ActivityIndicator size="large" color="#0066CC" />
      ) : (
        <Button title="Submit" onPress={handleReviewSubmit} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  addReview: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
    margin: 20,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 3,
  },
  stars: {
    marginBottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AddReview;





