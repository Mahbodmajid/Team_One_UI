import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ToolbarAndroid, } from 'react-native';
import { StackNavigator } from 'react-navigation';

let myNewTextColor = 'forestgreen';

//your new header background color
let myNewHeaderBackgroundColor = 'pink';

export default class PostScreen extends React.Component {
    
static navigationOptions = {
title: 'Chat',
headerStyle:{ backgroundColor: '#0f0'},
headerTitleStyle:{ color: '#fff'},
}
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
