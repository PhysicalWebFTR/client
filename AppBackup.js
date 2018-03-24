import React from 'react';

import { StyleSheet, Text, Image, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base'

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import SearchRestaurantScreen from './src/views/customer/SearchRestaurant'
import SelectTableScreen from './src/views/customer/SelectTable'

import ListMenuCustomerScreen from './src/views/customer/ListMenuCustomer'
import OrderSummaryScreen from './src/views/customer/OrderSummary'

import ListMenuOwnerScreen from './src/views/owner/ListMenuOwner'
import DetailMenuOwner from './src/components/owner/DetailMenu'
import AddMenu from './src/components/owner/AddMenu'

// import LandingScreen from './src/views/LandingScreen'
import Register from './src/components/LandingScreen/Register'

import Home from './src/views/customer/Home'

export default class App extends React.Component {
  render() {
    return (
      <Home />
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
  SearchRestaurant: {
    screen: SearchRestaurantScreen
  },
  SelectTable: {
    screen: SelectTableScreen
  },
  ListMenu: {
    screen: ListMenuCustomerScreen
  },
  OrderSummary: {
    screen: OrderSummaryScreen
  },
  ListMenuOwnerScreen: {
    screen: ListMenuOwnerScreen
  },
  DetailMenuOwner: {
    screen: DetailMenuOwner
  },
  AddMenu: {
    screen: AddMenu
  },
  // LandingScreen: {
  //   screen: LandingScreen
  // },
  Register: {
    screen: Register
  }
}


const DrawerRoutes = {
  LandingScreenStack: {
    name: 'LandingScreenViewStack',
    screen: StackNavigator(Stack, { 
      initialRouteName: 'SearchRestaurant', 
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
                    source={require('./src/res/background.jpg')} 
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
