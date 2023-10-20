import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import CourseImage from '../images/course.png'

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          source={CourseImage} // Add the path to your header image
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // backgroundColor: '#0066CC', 
    paddingTop: 30,
    fontSize: 26,
    textAlign: 'center',
    color: '#0066CC',
    fontWeight: '200',// Adjust the background color
  },
  imageContainer: {
    marginRight: 10, // Add spacing between the image and text
  },
  headerImage: {
    width: 40, // Adjust the image width
    height: 40, // Adjust the image height
  },
  textContainer: {
    fontSize: 20,
    color: 'blue', // Adjust the text color
    alignItems: 'center',
    justifyContent: 'center' // Add spacing between the image and text
  },
  headerText: {
    fontSize: 20,
    color: 'blue', // Adjust the text color
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});

export default Header;
