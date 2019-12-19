/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  BackHandler,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backButtonEnabled: '',
    };
  }
  // 监听原生返回键事件
  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onNavigationStateChange = navState => {
    this.setState({
      backButtonEnabled: navState.canGoBack,
    });
  };
  onBackAndroid = () => {
    //  官网中描述:backButtonEnabled: false,表示webView中没有返回事件，为true则表示该webView有回退事件
    if (this.state.backButtonEnabled) {
      this.refs['webView'].goBack();
      return true;
    } else {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //最近2秒内按过back键，可以退出应用。
        return false;
      }
      this.lastBackPressed = Date.now();
      // ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
      return true;
    }
  };
  render() {
    return (
      <View style={style.container}>
        <SafeAreaView style={style.container}>
          <WebView
            source={{uri: 'http://film.chenzhen.work'}}
            style={style.content}
            ref="webView"
            onNavigationStateChange={this.onNavigationStateChange}
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
