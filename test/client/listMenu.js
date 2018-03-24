import React from 'react';

import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ListMenu from '../.././src/views/customer/ListMenu'

import { StackNavigator, TabNavigator } from 'react-navigation';
import MenuCategory from '../.././src/components/customer/MenuCategory'
import { Container } from 'native-base';

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
  // it('should contain tabs', () => {
  //   const wrapper = shallow(
  //     <ListMenu/>
  //   )
  //   expect(wrapper.containsAnyMatchingElements([
  //     <Container/>
  //   ])).toEqual(true)
  // })
  
})