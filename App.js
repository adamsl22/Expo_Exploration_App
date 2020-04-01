import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
// import PageContainer from './components/PageContainer';
// import Nav from './components/Nav';
import Routes from './components/Routes';

export default function App() {
  // state = {
  //   view: 'start'
  // }

  // setView = (view) => {
  //   this.setState({view})
  // }

  // render(){
    return (
      <View style={styles.container}>
        <Header />
        {/* <Nav setView={this.setView}/>
        <PageContainer view={this.state.view}/> */}
        <Routes />
      </View>
    );
  // }
}

// note: styling is not cross-platform
// write flexible code that checks device size and automatically adjusts
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textbox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});
