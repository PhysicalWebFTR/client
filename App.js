import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header } from 'native-base'
import LandingScreen from './src/views/LandingScreen'
import SplashScreen from './src/views/SplashScreen'

export default class App extends React.Component {
  render() {
    return (
      <SplashScreen/>
      // <Container>
      // <Header />
      //   <LandingScreen/>
      // </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


