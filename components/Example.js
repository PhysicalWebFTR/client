import React, { Component } from 'react'

import { View, Text } from 'react-native'
import { Icon } from 'native-base';

class ExampleComponent extends React.Component{

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const name = 'Example Title'
    return {
      title: name,
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={24} style={{ color: tintColor }} />
      ),
      headerLeft:
        <Icon
          style={{color: '#fff'}}
          ios='ios-menu' android="md-menu"
          size={35}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
    }
  };


  render() {
    return(
      <View>
        <Text>Main Activity</Text>
      </View>
    )
  }

}

export default ExampleComponent