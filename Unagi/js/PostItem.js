import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class PostItem extends Component {

    render() {
        return (
            <View style={styles.container} >
            <Text style={styles.postText}> {this.props.postText} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            marginLeft: 16,
            marginRight: 16,
            marginTop: 12,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 4,
            borderStyle: 'solid',
            elevation: 1,
        },
        postText: {
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 4,
            marginRight: 4,
            color: '#212121',
            textAlign: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 20,
        }
    });
