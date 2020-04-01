import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ExtraTestComponent from './ExtraTestComponent'
import ListContainer from './ListContainer'
import Map from './Map'

const Stack = createStackNavigator();

export default function Routes(){
    return(
        < View style={styles.container}>
            < NavigationContainer>
                < Stack.Navigator>
                    <Stack.Screen name='Nav' component={ExtraTestComponent}/>
                    <Stack.Screen name='List' component={ListContainer}/>
                    <Stack.Screen name='Map' component={Map}/>
                </Stack.Navigator>
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