import React from 'react';
import ListMenuCustomer from '../.././src/views/customer/ListMenuCustomer'
import { StackNavigator, TabNavigator } from 'react-navigation';
import MenuCategory from '../.././src/components/customer/MenuCategory'
import { Container } from 'native-base';

// import Enzyme, { shallow, render, mount } from 'enzyme';


export default describe('List Menu Customer', () => {
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
      },
    }
  )

  it('should contain tabs', () => {
    const wrapper = shallow(
      <ListMenuCustomer/>
    )
    expect(wrapper.containsAnyMatchingElements([
      <Container>
          <Tabs />
        </Container>
    ]))
  })
  
})