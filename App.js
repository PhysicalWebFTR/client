import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { Container, Header } from 'native-base'
import LandingScreen from './src/views/LandingScreen'
import TableScreen from './src/views/customer/TableScreen'
import SplashScreen from './src/views/SplashScreen'
=======
import { Container } from 'native-base'
import ListMenu from './src/views/owner/ListMenu' 
import DetailMenu from './src/components/owner/DetailMenu'
import AddMenu from './src/components/owner/AddMenu'
// import ListMenu from './src/views/owner/ListMenu'
>>>>>>> on progress crud owner UI

export default class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <TableScreen/>
      // <SplashScreen/>
      // <Container>
      // <Header />
      //   <LandingScreen/>
      // </Container>
=======
      <Container>
        <DetailMenu/>
      </Container>
>>>>>>> on progress crud owner UI
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


