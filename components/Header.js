import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Test App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'blue'
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center'
    }
})