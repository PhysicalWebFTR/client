import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

class SplashScreen extends Component {
  componentDidMount () {
    this.props.onChangeState()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#f7b734"
        />
        <Image style={styles.image} source={require('../res/logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7b734',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#e3af2f'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  }
});

export default SplashScreen;