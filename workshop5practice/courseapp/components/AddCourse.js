import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from "react-native";


const window = Dimensions.get("window");


export default function AddCourse() {
  const [course, setCourse] = useState({
    title: "",
    faculty: "",
    code: "",
  });

  const change = (field, value) => {
    setCourse({ ...course, [field]: value });
  };

  const addNewCourse = async () => {
    const serverUrl = "http://localhost:5001/departments";
    const departmentId = "65308eba78ec9e73deed60be";

    try {
      const response = await fetch(`${serverUrl}/${departmentId}/courses`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Course added successfully");
      } else {
        throw new Error("Failed to add course");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Course</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={course.title}
          onChangeText={(text) => change("title", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Faculty"
          value={course.faculty}
          onChangeText={(text) => change("faculty", text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Code"
          value={course.code}
          onChangeText={(text) => change("code", text)}
        />
      </View>
      <Button title="Submit" onPress={addNewCourse} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: window.width * 0.8, // Adjust the width as needed
    marginBottom: 20, 
  },
  input: {
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    borderColor: "#aaa",
    borderWidth: 1, // Add a visible border
    borderColor: "#aaa", // Border color
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
  },
});