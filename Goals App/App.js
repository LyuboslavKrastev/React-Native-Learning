import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!')
  return (
    <View style={{padding: 50}} >
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput  placeholder="My Goal" style={{width: '80%', borderColor:"black", borderWidth: 1, padding: 10}} />

        <Button title="Add"/>
      </View>
    </View>
  );
}
