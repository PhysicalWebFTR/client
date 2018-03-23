import React, { Component } from 'react'
import { Container, Icon, Text } from 'native-base'

import CardRestaurant from '../components/CardRestaurant'

class SeacrhRestaurant extends Component {

  constructor(props){
    super(props)
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const name = 'Search Restaurant'
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

  render(){
    const navigation = this.props.navigation
    return (
      <Container>
        <CardRestaurant navigation={navigation}/>
      </Container>
    )
  }

}

export default SeacrhRestaurant