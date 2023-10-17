import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TextInputExample from './TextInputExample';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TextInput" component={TextInputExample} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

