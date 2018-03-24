import React, { Component } from 'react'
import { Container, Text, Icon } from 'native-base'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuCategory from '../../components/customer/MenuCategory'
import { StackNavigator, TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
  FoodCategory: {
    screen: props => <MenuCategory category='FOOD'/>,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: 'Food',
        screenProps: 'Food',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      }
    },
  },
  BeverageCategory: {
    screen: props => <MenuCategory category='BEVERAGE'/>,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: 'Beverage',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      }
    },
  },
  DessertCategory: {
    screen: props => <MenuCategory category='DESSERT'/>,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: 'Dessert',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      }
    },
  }
},
  {
    'lazy': true,
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#fff',
    },
  }
)


class ListMenu extends Component {

  static navigationOptions = ({ navigation }) => {
    const name = 'List Menu'
    return {
      title: name,
      headerRight:
        <Icon
          style={{ color: '#fff', marginRight: 12 }}
          ios='ios-menu' android="md-list-box"
          size={35}
          onPress={() => navigation.navigate('OrderSummary', { id: '-AoiQHkajcs' })}
        />
    }
  }

  // componentWillMount () {
  //   console.log('props list menu customer : ', this.props)
  // }

  render() {
    return (
      <Container>
        <Tabs />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  customer: state.customer,
  restaurant: state.restaurant
})

const connectedListMenu = connect(mapStateToProps)(ListMenu)

export default connectedListMenu