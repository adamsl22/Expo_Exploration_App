import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Header from './components/Header';

export default function App() {
  // const [outputText, setOutputText] = useState('text')
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
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
