import React, { Component } from 'react';

import { StyleSheet, Text, Image, ScrollView } from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import ExampleScreen from './components/Example'
import SearchRestaurantScreen from './views/SearchRestaurant'
import SelectTableScreen from './views/SelectTable'
import ListMenuScreen from './views/ListMenu'
import OrderSummaryScreen from './views/OrderSummary'

export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        {/* <RootStack/> */}
        <ListMenuScreen/>
      </Container>
    );
  }
}

const sharedNavigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#4CAF50',
    paddingLeft: 12
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
})


const Stack = {
  Example: {
    screen: ExampleScreen
  },
  SearchRestaurant: {
    screen: SearchRestaurantScreen
  },
  SelectTable: {
    screen: SelectTableScreen
  },
  ListMenu: {
    screen: ListMenuScreen
  },
  OrderSummary: {
    screen: OrderSummaryScreen
  }
}


const DrawerRoutes = {
  ExampleStack: {
    name: 'ExampleViewStack',
    screen: StackNavigator(Stack, { 
      initialRouteName: 'Example', 
      navigationOptions: sharedNavigationOptions
    })
  },
  SearchRestaurantStack: {
    name: 'SearchRestaurantViewStack',
    screen: StackNavigator(Stack, { 
      initialRouteName: 'SearchRestaurant', 
      navigationOptions: sharedNavigationOptions
    })
  }
}

const RootStack =
  StackNavigator({
    Drawer: {
      name: 'Drawer',
      screen: DrawerNavigator(
        DrawerRoutes,
        {
          contentComponent: (props) => (
            <ScrollView>
              <Container style={styles.navigationBackground}>
                <Container style={styles.navigationImage}>
                  <Image 
                    source={require('./res/background.jpg')} 
                    style={styles.itemImage}/>
                </Container>
                <Container style={styles.itemBackground}>
                  <Text style={styles.itemName}>Header</Text>
                </Container>
              </Container>
              <DrawerItems {...props} activeTintColor='#2196f3' padding='16' />
            </ScrollView>
          ),
        }
      )
    },
    ...Stack
  },
  {
    headerMode: 'none'
  }
)

const styles = StyleSheet.create({
  navigationBackground: {
    flex: 1,
    height: 160,
  },
  navigationImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  itemImage: {
    flex: 1, 
    resizeMode: 'center',
    width: '100%',
    height: '100%'
  },
  itemBackground: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  itemName: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff'
  }
})
