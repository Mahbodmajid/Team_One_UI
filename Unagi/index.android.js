import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import PostItem from './js/PostItem'
import ActionButton from 'react-native-action-button';
import { StackNavigator } from 'react-navigation';
import PostScreen from './js/PostScreen'
// require('./js/Authorization')
// require('./js/RequestHandler')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  toolbarTitle: {
    color: 'white'
  },
  toolbar: {
    backgroundColor: '#8BC34A',
  }

});

// ----TEMP GUID GENERATOR
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
// --------

export default class HomeScreen extends Component {
static navigationOptions = {
    title: 'اوناگی',
    headerTintColor: 'white',
    headerStyle: StyleSheet.flatten(styles.toolbar),
    headerTitleStyle: StyleSheet.flatten(styles.toolbarTitle),
  };

  constructor(props) {
    super(props)
    this.state = {
      posts: [
        {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد این یک پست است. این یک پست است. این یک پست است"
        }, {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }, {
          key: guid(),
          postText: "salam salam salam salam jnjni uj uhijnji ujjinl kjojl"
        }, {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }, {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }, {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }, {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }, {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }, {
          key: Date.now(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد"
        }
      ]
    }
  }

  render() {
          const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{margin: 8}}>
          {this.state.posts.map(post => (
            <PostItem
              key={post.key}
              postText={post.postText}
            />
          ))}
          </View>
        </ScrollView>
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

AppRegistry.registerComponent('Unagi', () => Unagi);