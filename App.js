import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredText, setEnteredText] = useState('')
  const [textList, setTextList] = useState([])

  function inputHandler(text){
    setEnteredText(text)
  }

  function addHandler(){
    setTextList([...textList, enteredText])
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TextInput placeholder='type list item' style={styles.textbox} onChangeText={inputHandler} />
        <Button title='Add' onPress={addHandler} />
      </View>
      <View>
        {textList.map((text) => <Text key={text}>{text}</Text>)}
      </View>
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
    padding: 10,
    width: 200
  }
});
