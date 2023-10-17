import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Stars from './Stars'; // Import your Stars component

const AddReview = () => {
  const navigation = useNavigation();

  const [review, setReview] = useState({
    name: '',
    rating: 0,
    comment: '',
    submitting: false,
  });

  const handleReviewSubmit = () => {
    setReview({ ...review, submitting: true });
    // Implement your review submission logic here

    // Simulate an API call or other processing
    setTimeout(() => {
      setReview({ ...review, submitting: false });
      // Navigate back to the previous screen
      navigation.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Your Name:</Text>
      <TextInput
        style={styles.input}
        value={review.name}
        onChangeText={(text) => setReview({ ...review, name: text })}
      />
      <Text style={styles.label}>Rating:</Text>
      <TextInput
        style={styles.input}
        value={review.rating.toString()}
        onChangeText={(text) => {
          const rating = parseInt(text);
          if (!isNaN(rating) && rating >= 0 && rating <= 5) {
            setReview({ ...review, rating });
          }
        }}
      />
      <Text style={styles.label}>Comment:</Text>
      <TextInput
        style={styles.input}
        value={review.comment}
        onChangeText={(text) => setReview({ ...review, comment: text })}
      />
      {review.submitting ? (
        <ActivityIndicator size="large" color="#0066CC" />
      ) : (
        <Button title="Submit Review" onPress={handleReviewSubmit} />
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
});

export default AddReview;





