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
    flexDirection: 'row',
    alignItems: 'center'
  },
  toolbarCharLimit: {
    color: 'white',
    flex: 1,
    margin: 12,
  },
  toolbarSendButton: {
    flex: 1,
    margin: 12,
  },
  toolbarSendIcon: {
    width: 30,
    height: 30,
  }
})


export default class PostScreen extends Component {


  static navigationOptions = navigation => ({
    title: 'افزودن پست',
    headerStyle: StyleSheet.flatten(styles.toolbar),
    headerTitleStyle: StyleSheet.flatten(styles.toolbarTitle),
    headerRight: 
    <View style={styles.toolbarRight} >
      <Text style={styles.toolbarCharLimit} >
        ۱۶۰
        </Text>
        <TouchableOpacity style={styles.toolbarSendButton}>
      <Image
        source={require('./../icons/sendButton.png')}
        style={styles.toolbarSendIcon}
      />
    </TouchableOpacity>
    </View>
  })
  constructor() {
    super()
    this.state = {
      charLimit: '۱۶۰'
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
