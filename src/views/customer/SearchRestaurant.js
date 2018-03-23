import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Icon, Text, Button } from 'native-base'

import CardRestaurant from '../../components/customer/CardRestaurant'

class SearchRestaurant extends Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const name = 'Search Restaurant'
    return {
      title: name,
      headerRight: 
        <Icon
        style={{ color: '#fff', marginRight: 15 }}
        ios='ios-sync' android="md-sync"
        size={35}
      />,
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

  render(){
    const navigation = this.props.navigation
    return (
      <Container>
        <CardRestaurant navigation={navigation}/>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  buttonScan: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default SearchRestaurant
