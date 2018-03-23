import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';

import SearchRestaurantScreen from './src/views/customer/SearchRestaurant'
import SelectTableScreen from './src/views/customer/SelectTable'
import ListMenuScreen from './src/views/customer/ListMenu'
import OrderSummaryScreen from './src/views/customer/OrderSummary'

import LandingScreen from './src/views/LandingScreen'
import TableScreen from './src/views/customer/TableScreen'
import SplashScreen from './src/views/SplashScreen'
import ListMenuOwner from './src/views/owner/ListMenu'
import DetailMenu from './src/components/owner/DetailMenu'
import AddMenu from './src/components/owner/AddMenu'

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <RootStack/>
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
  },
  LandingScreen: {
    screen: LandingScreen
  },
  ListMenuOwner: {
    screen: ListMenuOwner
  },
  DetailMenu: {
    screen: DetailMenu
  },
  AddMenu: {
    screen: AddMenu
  }
}


const DrawerRoutes = {
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

