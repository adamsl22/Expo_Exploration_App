import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import CameraPage from './src/CameraPage';

export default function App() {
  // const [enteredText, setEnteredText] = useState('')
  
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={{
          latitude: 40.7116,
          longitude: -74.0158
        }}/>
    </View>
  );
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textbox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: 200
  }
});
