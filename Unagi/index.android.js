/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ToolbarAndroid} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class Unagi extends Component {

  constructor(props) {
    super(props)
    this.state = {
      barTitle: "اوناگی"
    }
  }


  render() {
    return (
      <View style={styles.container}>
         <NavigationBar
          style={styles.appActionBar}
          title={{title: this.state.barTitle, style: styles.appActionBarTitle}} /> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appActionBar: {
    backgroundColor: '#8BC34A',
    flexDirection: 'column',
  },
  appActionBarTitle: {
    color: 'white'
  }
});

AppRegistry.registerComponent('Unagi', () => Unagi);
