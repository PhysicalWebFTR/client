import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import { Card, CardItem, Body, Left, Right, Button, Icon } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Pusher from 'pusher-js/react-native'; // for using Pusher inside React Native
import BleManager from 'react-native-ble-manager'; // for talking to BLE peripherals

import { changeStatusAction, fetchOwner } from '../../store/actions'
class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefresh: false,
      isCustomer: false
    }
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const name = 'Admin'
    return {
      title: name,
      drawerIcon: ({ tintColor }) => (
        <Icon name="md-person" size={24} style={{ color: tintColor }} />
      ),
      headerLeft:
        <Icon
          style={{color: '#fff'}}
          ios='ios-menu' android="md-menu"
          size={35}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
    }
  }

  handleButton = (item) => {
    this.props.changeStatusAction(item, this.props.orderLists)
    let isRefresh = !this.state.isRefresh
    this.setState({
      isRefresh
    })
  }

  componentWillMount () {
    this.connect('B8:27:EB:5F:7C:84')
  }

  componentDidMount () {
    this.getPusherData()
  }

  connect = (peripheralId) => {
    console.log('state Connect Peripheral')
    BleManager.connect(peripheralId)
      .then(() => {
        console.log('Connected!', 'You are now connected to the peripheral.');
        // retrieve the services advertised by this peripheral
        BleManager.retrieveServices(peripheralId)
          .then((peripheralInfo) => {
            console.log('Peripheral info:', peripheralInfo);
            this.setState({ isConnecting: true })
            this.props.fetchPeripheralDetail(peripheralInfo)
            BleManager.disconnect(peripheralId)
              .then(() => {
                const { navigate } = this.props.navigation
                navigate('SelectTable')
                console.log('Attended', 'You have successfully attended the event, please disable bluetooth.');
              })
              .catch((error) => {
                console.log('Error disconnecting', "You have successfully attended the event but there's a problem disconnecting to the peripheral, please disable bluetooth to force disconnection.");
              });
          })
      })
      .catch((error) => {
        console.log(error)
        BleManager.disconnect(peripheralId)
          .then(() => {
            console.log("Err..", 'Something went wrong while trying to connect.');
          })
          .catch((error) => {
            console.log('Error disconnecting', "You have successfully attended the event but there's a problem disconnecting to the peripheral, please disable bluetooth to force disconnection.");
          });
        
      });
  }

  render() {
    return (
      <View>
        <FlatList
          extraData={this.state.isRefresh}
          data={this.props.orderLists}
          renderItem={({item}) => (
            <Card>
            <CardItem style={{backgroundColor: item.isReady ? '#fff8a8' : 'white'}}>  
                <Left style={style.leftList}>
                  <Text>Table: {item.table.name}</Text>
                  <Text>{item.menuId.name} </Text>
                  <Text>quantity: {item.quantity} </Text>
                </Left>
                <Right>
                  <Button 
                    style={style.submitButton} warning
                    onPress={() => this.handleButton(item)}
                    >
                    <Text style={{color: 'white'}}> V </Text>
                  </Button>
                </Right>
            </CardItem>
          </Card>
          )}
        />
        <Button full success>
          <Text style={{color : 'white'}}> UPDATE </Text> 
        </Button>
      </View>
    );
  }

  getPusherData () {
    var pusher = new Pusher('878d5b48666a27d89b79', {
      cluster: 'ap1',
      encrypted: true
    });

    var channel = pusher.subscribe('restaurant-channel');
    channel.bind('get-order-data', (data) => {
      console.log('get order list : ', data)
      this.props.fetchOwner(data)
    });
    channel.bind('restaurant-data-failed', (data) => {
      Alert.alert('Error connection, please try again')
    })
  }
}

const style = StyleSheet.create({
  leftList: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  submitButton: {
    width: 45,
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
  orderLists: state.owner.orderLists
})

const mapDispatchToProps = dispatch => ({
  changeStatusAction,
  fetchOwner
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderList)