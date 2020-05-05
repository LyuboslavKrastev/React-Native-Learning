import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goal}>
      <Text>{props.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    backgroundColor: "green",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalItem;
