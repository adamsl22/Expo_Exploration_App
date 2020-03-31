import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import CameraPage from './src/CameraPage';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {
  state = {
    location: null,
    errorMessage: null,
  };

  async componentDidMount(){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }
  
  render(){
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          provider='google'
          region={this.state.location}
        />
      </View>
    );
  }
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
