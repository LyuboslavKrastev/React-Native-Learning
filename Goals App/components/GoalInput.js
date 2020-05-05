import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onInputChange = (text) => {
    setEnteredGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="My Goal"
        style={styles.input}
        onChangeText={onInputChange}
      />
      <Button title="Add" onPress={() => props.onSubmit(enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: { width: "80%", borderColor: "black", borderWidth: 1, padding: 10 },
});

export default GoalInput;
