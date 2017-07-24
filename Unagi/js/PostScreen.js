import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';

const styles = StyleSheet.create({
  toolbarTitle: {
    color: 'white'
  },
  toolbar: {
    backgroundColor: '#8BC34A'
  },
  toolbarRight: {
    flex: 2,
    flexDirection: 'column'
  },
  toolbarCharLimit: {
    color: 'white',
    flex: 1,
  },
  toolbarSendButton: {
    flex: 1,
  }

})

export default class PostScreen extends Component {

  static navigationOptions = {
    title: 'افزودن پست',
    headerStyle: StyleSheet.flatten(styles.toolbar),
    headerTitleStyle: StyleSheet.flatten(styles.toolbarTitle),
    headerRight: 
    <View style={styles.toolbarRight} >
      <Text style={styles.toolbarCharLimit} >
        
        </Text>
        <TouchableOpacity style={styles.toolbarSendButton}>
      <Image
        source={require('./../icons/sendButton.png')}
      />
    </TouchableOpacity>
    </View>
  }
  constructor() {
    super()
    this.state = {
      charLimit: 160
    }
  }

  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}
