/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ToolbarAndroid, } from 'react-native';
import ActionButton from 'react-native-action-button';
import { StackNavigator } from 'react-navigation';
import PostScreen from './postScreen'

class HomeScreen extends React.Component {

    static navigationOptions = {
    title: 'Unagi',
    headerTintColor: 'blue',
  };
  render() {
          const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        
        <ActionButton
          buttonColor="rgba(126,126,126,1)"
          onPress={() =>  navigate('Post')}/>
      </View>
    );
  }
}

const Unagi = StackNavigator({
  Home: { screen: HomeScreen },
  Post: { screen: PostScreen },
});


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
  },
    FAB:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        bottom: 10,
        right: 10, 
    }
});

AppRegistry.registerComponent('Unagi', () => Unagi);
