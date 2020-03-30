import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {id: 1, text: 'Jacket'},
    {id: 2, text: 'Shirt'},
    {id: 3, text: 'Pants'},
    {id: 4, text: 'Hat'}
  ])

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  function addItem(text){
    if (text){
      setItems(prevItems => {
        return [...prevItems, {id: prevItems.length + 1, text}]
      })
    } else {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'})
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => 
        <ListItem item={item} deleteItem={deleteItem}/>
      } />
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
