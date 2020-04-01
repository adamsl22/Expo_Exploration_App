import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert, Button} from 'react-native';
import ListItem from './ListItem';
import AddItem from './AddItem';

export default function ListContainer({navigation}) {
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
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => 
        <ListItem item={item} keyExtractor={item => item.id.toString()} deleteItem={deleteItem}/>
      }/>
    </View>
  );
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  container: {
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