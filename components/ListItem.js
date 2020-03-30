import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';

export default function ListItem({item, deleteItem}){
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Button style={styles.itemDeleteButton} title={'Delete'} onPress={() => deleteItem(item.id)} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        padding: 15,
        backgroundColor: '#f8f8f8'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 15
    }
})