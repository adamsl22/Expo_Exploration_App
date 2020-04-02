import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import ExtraTestComponent from './ExtraTestComponent'
import ListContainer from './ListContainer'
import Map from './Map'

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        < View style={styles.container}>
            < NavigationContainer>
                < Drawer.Navigator>
                    <Drawer.Screen name='Home' component={ExtraTestComponent}/>
                    <Drawer.Screen name='List' component={ListContainer}/>
                    <Drawer.Screen name='Map' component={Map}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff'
    }
  });