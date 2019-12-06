/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <SafeAreaView style={style.container}>
          <WebView
            source={{uri: 'http://film.chenzhen.work'}}
            style={style.content}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  statusBar: {
    width: '100%',
    backgroundColor: '#00bdab',
  },
});
