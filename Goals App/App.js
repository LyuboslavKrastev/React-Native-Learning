import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const onSubmit = (goalContent) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalContent }
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput onSubmit={onSubmit}/>
      <FlatList
        data={goalsList}
        renderItem={(itemData) => <GoalItem content={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
