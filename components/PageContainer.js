import React from 'react';
import {StyleSheet, View} from 'react-native';
import ListContainer from './ListContainer'
import Map from './Map'

export default class PageContainer extends React.Component {

    renderView = (view) => {
        console.log(view)
        switch (view) {
            case 'List':
                return <ListContainer />
            case 'Map':
                return <Map />
        }
    }

    render(){
        return (
        <View style={styles.container}>
            {this.renderView(this.props.view)}
        </View>
        );
    }
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '70%',
    alignSelf: 'flex-end'
  }
});
