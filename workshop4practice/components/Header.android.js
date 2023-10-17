import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/course.png')} // Add the path to your header image
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Courses Review</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#0066CC', // Adjust the background color
  },
  imageContainer: {
    marginRight: 10, // Add spacing between the image and text
  },
  headerImage: {
    width: 40, // Adjust the image width
    height: 40, // Adjust the image height
  },
  textContainer: {
    marginLeft: 10, // Add spacing between the image and text
  },
  headerText: {
    fontSize: 20,
    color: 'white', // Adjust the text color
  },
});

export default Header;


