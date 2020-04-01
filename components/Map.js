import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
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
    if (this.state.location){
      return (
        <View>
          <MapView
            style={styles.mapStyle}
            provider='google'
            region={{latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05
        }}
          />
        </View>
      );
    } else {
      return <View><Text>Enable location to use this feature.</Text></View>
    }
  }
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'flex-end'
  }
});