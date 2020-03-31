import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Nav(props){
    return(
        <View style={styles.nav}>
            <Button style={styles.btn} title='List' onPress={() => props.setView('List')} />
            <Button style={styles.btn} title='Map' onPress={() => props.setView('Map')} />
        </View>
    );
};

const styles = StyleSheet.create({
    nav: {
        height: '100%',
        width: '30%',
        backgroundColor: 'lightgray',
        alignSelf: 'flex-start'
    },
    btn: {
        color: 'yellow',
        fontSize: 23,
        textAlign: 'center',
        margin: 80
    }
})