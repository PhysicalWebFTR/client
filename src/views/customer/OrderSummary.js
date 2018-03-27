import React, { PureComponent } from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Button } from 'native-base';
import convertToRupiah from '../../helpers/convertCurrency'
// import PusherJs from 'pusher-js/react-native';
// const Pusher = require('pusher')
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BleManager from 'react-native-ble-manager';
import bytesCounter from 'bytes-counter';
import { stringToBytes } from 'convert-string';

import { addItemAction, removeItemAction, resetOrder } from '../../store/actions'

class OrderSummary extends PureComponent {
  constructor () {
    super()
    this.state = {
      isRefresh: false,
      totalPrice: 0
    }
  }

  static navigationOptions = ({ navigation }) => {
    const name = 'Order Summary'
    return {
      title: name
    }
  }

  generateTotalprice = () => {
    if (this.props.menuList.length > 0) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      let totalPrice = this.props.menuList.map(item => item.price * item.quantity)
      totalPrice = totalPrice.reduce(reducer)
      this.setState({totalPrice}) 
    }
  }

  componentDidMount () {
    console.log('props ordersummary', this.props)
    this.generateTotalprice()
  }

  componentDidUpdate () {
    this.generateTotalprice()
  }

  refreshPage = () => {
    let isRefresh = !this.state.isRefresh
    this.setState({
      isRefresh
    })
  }

  handleAdd(item) {
    this.props.addItemAction(item, this.props.menuList)
    this.refreshPage()
  }

  handleRemove = (item) => {
    this.refreshPage()
    this.props.removeItemAction(item, this.props.menuList)
    if (this.props.menuList.length <= 0) {
      this.props.navigation.goBack()
    }
    
  }

  handleMin(item) {
    if (item.quantity == 1) {
      Alert.alert(
        'Remove Item?',
        'This item will be removed from your cart',
        [
          {
            text: 'Yes', onPress: () => this.handleRemove(item)
          },
          {text: 'No'},
        ],
        { cancelable: false }
      )
    } else {
      this.props.addItemAction(item, this.props.menuList, true)
      this.refreshPage()
    }
  }

  confirmOrder = () => {
    Alert.alert(
      'Confirm Order',
      'Do you want to submit this order?',
      [
        {
          text: 'Yes', onPress: () => this.handleOrder()
        },
        {text: 'No'},
      ],
      { cancelable: false }
    )
  }

  handleOrder = () => {
    let menuList = []
    this.props.customer.menuList.forEach(menu => {
      menuList.push({
        _id: menu._id,
        quantity: menu.quantity
      })
    })
    this.props.customer.menuList = menuList
    let str = JSON.stringify(this.props.customer); // convert the object to a string
    let bytes = bytesCounter.count(str); // count the number of bytes
    let data = stringToBytes(str); // convert the string to a byte array

    // construct the UUIDs the same way it was constructed in the server component earlier
    const BASE_UUID = '-5659-402b-aeb3-d2f7dcd1b999';
    const PERIPHERAL_ID = '0000';
    const PRIMARY_SERVICE_ID = '0100';

    let primary_service_uuid = PERIPHERAL_ID + PRIMARY_SERVICE_ID + BASE_UUID; // the service UUID
    let ps_characteristic_uuid = PERIPHERAL_ID + '0300' + BASE_UUID; // the characteristic ID to write on
    console.log('state attend data : ', data)
    // write the attendees info to the characteristic
    console.log('connected peripheral : ' , this.props.connectedPeripheral)
    console.log('primary service uuid', primary_service_uuid)
    console.log('characteristic uuid : ', ps_characteristic_uuid)
    console.log('bytes : ', bytes)
    console.log('BLE MENEJER ', BleManager.write)
    BleManager.write(this.props.connectedPeripheral, primary_service_uuid, ps_characteristic_uuid, data, bytes)
      .then(() => {
        console.log('state: BleManager write')
        // disconnect to the peripheral
        BleManager.disconnect(this.props.connectedPeripheral)
          .then(() => {
            Alert.alert('Thank You :)', 'Your order is being process')
            this.props.navigation.goBack()
            this.props.resetOrder()
            console.log('Attended', 'You have successfully attended the event, please disable bluetooth.');
          })
          .catch((error) => {
            console.log('Error disconnecting', "You have successfully attended the event but there's a problem disconnecting to the peripheral, please disable bluetooth to force disconnection.");
          });
      })
      .catch((error) => {
        console.log(error, 'ini errror')
        console.log('Error attending', "Something went wrong while trying to attend. Please try again.");
      });
    // var pusher = new Pusher('878d5b48666a27d89b79', {
    //   cluster: 'ap1',
    //   encrypted: true
    // });
    // var pusherTrigger = new PusherTrigger('878d5b48666a27d89b79', {
    //   cluster: 'ap1',
    //   encrypted: true
    // })
    // pusher.trigger('order-channel', 'get-order-event', this.props.customer)
  }
  
  render() {
    return (
      <Content>
        <Card>
          <CardItem bordered>
            <Text style={{fontWeight: 'bold'}}>
              Items to order
            </Text>
          </CardItem>
          <FlatList
            data={this.props.menuList}
            extraData={this.state.isRefresh}
            renderItem={({item}) => {
                        
              return (
              <CardItem key={item.menuId} bordered style={{flex: 1, flexWrap: 'wrap'}}>
                <View style={styles.container}>
                  <Left>
                    <Text>
                      {item.name}
                    </Text>
                  </Left>
                  <Right>
                    <Text style={{margin:5}}>
                      {convertToRupiah(item.price)}
                    </Text>
                  </Right>
                </View>
                <View style={styles.container}>
                  <Left>
                  </Left>
                  <Right>
                    <View style={{flex: 1, flexDirection:'row'}}>
                    <Button 
                        style={styles.button} bordered warning
                        onPress={() => this.handleMin(item)}
                        >
                        <Text style={styles.insideButton}>-</Text>
                      </Button>
                      <Button style={styles.button} bordered warning>
                        <Text style={styles.insideButton}>{item.quantity}</Text>
                      </Button>
                      <Button 
                        style={styles.button} bordered warning
                        onPress={() => this.handleAdd(item)}
                      >
                        <Text style={styles.insideButton}>+</Text>
                      </Button>
                    </View>
                  </Right>
                </View>
              </CardItem>
            )}
          }
          />
        </Card>
        <Card style={styles.container}>
          <Text style={styles.totalPrice}>Total Price: {convertToRupiah(this.state.totalPrice)}</Text>
        </Card>
           
        <View>
          <Button
            onPress={() => this.confirmOrder()}
            style={styles.submit} 
            block 
            warning>
            <Text> Order </Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  totalPrice: {
    margin: 10,
    marginRight: 20,
    textAlign: 'right'
  },
  container: {
    flex: 1,
  },
  insideButton: {
    fontSize: 14,
    width: 60
  },
  button: {
    height: 35,
    width: 35,
    justifyContent: 'flex-start'
  },
  submit: {
    margin: 5,
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  menuList: state.customer.menuList,
  customer: state.customer,
  connectedPeripheral: state.peripherals.detailPeripheral.id
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItemAction, removeItemAction, resetOrder
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary)