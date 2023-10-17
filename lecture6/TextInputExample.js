import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

function TextInputExample() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Enter your text:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(newText) => setText(newText)}
        value={text}
      />
      <Text>Your entered text: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },
});

export default TextInputExample;




