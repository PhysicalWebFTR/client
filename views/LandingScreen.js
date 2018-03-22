import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from '../components/LandingScreen/Register'

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
        <Register/>
    );
  }
}

export default LandingScreen;