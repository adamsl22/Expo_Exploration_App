import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  // const [outputText, setOutputText] = useState('text')
  return (
    <View style={styles.container}>
      <TextInput placeholder='type list item'/>
      <Button title='Add' style={styles.textbox}/>
    </View>
  );
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textbox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
