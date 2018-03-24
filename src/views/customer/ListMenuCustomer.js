import React, { Component } from 'react'
import { Container, Text, Icon } from 'native-base'

import MenuCategory from '../../components/customer/MenuCategory'
import { StackNavigator, TabNavigator } from 'react-navigation';

const Tabs = TabNavigator({
  FoodCategory: {
    screen: MenuCategory,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: 'Food',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      }
    },
  },
  BeverageCategory: {
    screen: MenuCategory,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarLabel: 'Beverage',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      }
    },
  },
  DessertCategory: {
    screen: MenuCategory,
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
      animationEnabled: true,
      tabStyle: {
        width: 136
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: 'orange'
      }
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

  render() {
    return (
      <Container>
        <Tabs />
      </Container>
    )
  }

}

export default ListMenu