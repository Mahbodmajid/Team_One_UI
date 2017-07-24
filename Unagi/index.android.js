import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, ScrollView} from 'react-native';
import NavigationBar from 'react-native-navbar';
import PostItem from './js/PostItem'

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

export default class Unagi extends Component {

  constructor(props) {
    super(props)
    this.state = {
      barTitle: "اوناگی",
      posts: [
        {
          key: guid(),
          postText: "آدم های اطراف تقلبی اند. پیتزاست که حقیقت دارد این یک پست است. این یک پست است. این یک پست است"
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
    return (
      <View style={styles.container}>
        <NavigationBar
          style={styles.appActionBar}
          title={{
          title: this.state.barTitle,
          style: styles.appActionBarTitle
        }}/>
        <ScrollView>
          {this.state.posts.map(post => (
            <PostItem
              key={post.key}
              postText={post.postText}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  appActionBar: {
    backgroundColor: '#8BC34A',
    flexDirection: 'column'
  },
  appActionBarTitle: {
    color: 'white',
    textAlign: 'right',
  }
});

AppRegistry.registerComponent('Unagi', () => Unagi);
