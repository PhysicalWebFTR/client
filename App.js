import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './views/LandingScreen'
import { Container, Header } from 'native-base'

export default class App extends React.Component {
  render() {
    return (
      <Container>
      <Header />
        <LandingScreen/>
      </Container>
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
