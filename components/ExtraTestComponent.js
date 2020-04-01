import React from 'react';
import {View, Button} from 'react-native';

export default function ExtraTestComponent({navigation}){
    return(
        <View>
        <Button title="Go to List" onPress={() => navigation.navigate('List')} />
        <Button title="Go to Map" onPress={() => navigation.navigate('Map')} /></View>
    )
}