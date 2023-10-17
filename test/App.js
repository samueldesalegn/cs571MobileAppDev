// import React from 'react';
// import { FlatList, View, Text, StyleSheet } from 'react-native';

// const data = [
//   { key: '1', name: 'Samuel' },
//   { key: '2', name: 'Tumdedo' },
//   // Add more items as needed
// ];

// const styles = StyleSheet.create({
//   itemContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//   },
//   itemName: {
//     fontSize: 18,
//     color: 'blue',
//   },
// });

// const App = () => {
//   return (
//     <FlatList
//       data={data}
//       renderItem={({ item }) => (
//         <View style={styles.itemContainer}>
//           <Text style={styles.itemName}>{item.name}</Text>
//         </View>
//       )}
//     />
//   );
// };

// export default App;


// import React from 'react';
// import { ScrollView, View, Text, StyleSheet } from 'react-native';

// const data = [
//   { key: '1', name: 'Samuel' },
//   { key: '2', name: 'Tumdedo' },
//   // Add more items as needed
// ];

// const styles = StyleSheet.create({
//   itemContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: 'lightgray',
//   },
//   itemName: {
//     fontSize: 18,
//     color: 'blue',
//   },
// });

// const App = () => {
//   return (
//     <ScrollView>
//       {data.map((item) => (
//         <View key={item.key} style={styles.itemContainer}>
//           <Text style={styles.itemName}>{item.name}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { View, TextInput } from 'react-native';

// const App = () => {
//   const [text, setText] = useState(''); // Initialize the text state

//   const handleTextChange = (newText) => {
//     setText(newText); // Update the text state when the user types
//   }

//   return (
//     <View>
//       <TextInput
//         value={text} // Set the initial value
//         onChangeText={handleTextChange} // Callback for text changes
//         placeholder="Type something..."
//       />
//     </View>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({
//       ...formData,
//       [field]: value, // Update the corresponding field in the state
//     });
//   };

//   const handleSubmit = () => {
//     // Handle the form submission with the formData object
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <View>
//       <Text>Name:</Text>
//       <TextInput
//         value={formData.name}
//         onChangeText={(text) => handleInputChange('name', text)}
//         placeholder="Enter your name"
//       />

//       <Text>Email:</Text>
//       <TextInput
//         value={formData.email}
//         onChangeText={(text) => handleInputChange('email', text)}
//         placeholder="Enter your email"
//       />

//       <Text>Phone Number:</Text>
//       <TextInput
//         value={formData.phoneNumber}
//         onChangeText={(text) => handleInputChange('phoneNumber', text)}
//         placeholder="Enter your phone number"
//       />

//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// }

// export default App;



// import React, { useState } from 'react';

// const App = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//   });

//   const validateName = (name) => {
//     if (name.trim() === '') {
//       return 'Name is required.';
//     }
//     return '';
//   };

//   const validateEmail = (email) => {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!email.match(emailPattern)) {
//       return 'Invalid email address.';
//     }
//     return '';
//   };

//   const handleInputChange = (name, value) => {
//     const validationErrors = { ...errors };
//     if (name === 'name') {
//       validationErrors.name = validateName(value);
//     } else if (name === 'email') {
//       validationErrors.email = validateEmail(value);
//     }

//     setErrors(validationErrors);
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Validate the form before submission
//     const validationErrors = {};
//     validationErrors.name = validateName(formData.name);
//     validationErrors.email = validateEmail(formData.email);

//     if (validationErrors.name || validationErrors.email) {
//       setErrors(validationErrors);
//       console.log('Form validation failed. Please correct errors.');
//       return;
//     }

//     // Form submission logic here
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Name"
//         value={formData.name}
//         onChange={(e) => handleInputChange('name', e.target.value)}
//       />
//       {errors.name && <span className="error">{errors.name}</span>}

//       <input
//         type="text"
//         placeholder="Email"
//         value={formData.email}
//         onChange={(e) => handleInputChange('email', e.target.value)}
//       />
//       {errors.email && <span className="error">{errors.email}</span>}

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default App;



// import React from 'react';
// import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

// const App = () => {
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <TextInput
//           placeholder="Username"
//           style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
//         />
//         <TextInput
//           placeholder="Password"
//           style={{ borderWidth: 1, padding: 10, width: 200, marginBottom: 10 }}
//         />
//         {/* Other form elements */}
//       </View>
//     </KeyboardAvoidingView>
//   );
// };

// export default App;

// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import LoginForm from './LoginForm'; // Import your LoginForm component

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Login Form</Text>
//       <LoginForm />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default App;



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View, Text } from 'react-native'; // Import View and Text from 'react-native'

// // Define your screen components
// function HomeScreen() {
//   return (
//     // Your Home screen component
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     // Your Profile screen component
//     <View>
//       <Text>Profile</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

import { View, Text } from 'react-native';
import LocationTest from './LocationTest';

function App() {
  return (
    <View>
      <LocationTest />
    </View>
  );
}

export default App;






