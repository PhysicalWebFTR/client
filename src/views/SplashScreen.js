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
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#0e4749"
        />
        <Image style={styles.image} source={require('../res/logo_tagline.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e4749',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: '#49a078'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
  }
});

export default SplashScreen;