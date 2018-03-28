import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  StyleSheet, 
  NativeEventEmitter, 
  NativeModules,
  Alert
} from 'react-native'

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Left,
  Right
} from 'native-base'

import Pusher from 'pusher-js/react-native'; // for using Pusher inside React Native
import BleManager from 'react-native-ble-manager'; // for talking to BLE peripherals
import Spinner from 'react-native-spinkit'; // for showing a spinner when loading something 

import { fetchRestaurant, fetchPeripheralDetail, fetchCustomerRestaurantId } from '../../store/actions'

class CardRestaurant extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isConnecting: false,
      isCustomer: false
    }
  }

  componentDidMount () {
    this.getPusherData()
    this.setState({ isCustomer: true })
  }

  componentWillMount () {
    this.setState({ isConnecting: false })
    this.setState({ isCustomer: true })
  }

  connect = (peripheralId) => {
    console.log('state Connect Peripheral')
    BleManager.connect(peripheralId)
      .then(() => {
        console.log('Connected!', 'You are now connected to the peripheral.');
        BleManager.retrieveServices(peripheralId)
          .then((peripheralInfo) => {
            console.log('Peripheral info:', peripheralInfo);
            this.setState({ isConnecting: true })
            this.props.fetchPeripheralDetail(peripheralInfo)
          })
      })
      .catch((error) => {
        console.log(error)
        BleManager.disconnect(peripheralId)
          .then(() => {
            Alert.alert('Something went wrong', 'Please connect again')
            console.log("Err..", 'Something went wrong while trying to connect.');
          })
          .catch((error) => {
            console.log('Error disconnecting');
          });
        
      });
  }

  getPusherData () {
    var pusher = new Pusher('878d5b48666a27d89b79', {
      cluster: 'ap1',
      encrypted: true
    });

    var channel = pusher.subscribe('restaurant-channel');
    channel.bind('get-restaurant-event', (data) => {
      console.log('state restaurant-event : ', data)
      console.log('is customer: ', this.state.isCustomer)
      this.setState({ isConnecting: false })
      this.props.fetchCustomerRestaurantId(data._id)
      this.props.fetchRestaurant(data)
      const { navigate } = this.props.navigation
      navigate('SelectTable')
    });

    channel.bind('restaurant-data-failed', (data) => {
      Alert.alert('Error connection, please try again')
    })
  }
  
  render() {
    if (this.props.is_scanning) {
      return <Container></Container>
    } else if (this.props.peripherals) {
      return (
        <Container>
          <Content style={styles.card}>
          {
            this.props.peripherals.map((peripheral, idx) =>(
              <Card key={idx}>
              <CardItem>
                <Body style={styles.cardBody}>
                  <Left>
                    <Text>
                      {peripheral.name}
                    </Text>
                  </Left>
                  <Right>
                    <Button success
                      onPress={() => this.connect(peripheral.id)}>
                      <Text> Connect </Text>
                    </Button>
                  </Right>
                </Body>
              </CardItem>
            </Card>
            ))
          }
          </Content>
        </Container>
      )
    } else {
      return ''
    }
  }

}

const styles = StyleSheet.create({
  card: {
    margin: 8
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = state => ({
  is_scanning: state.peripherals.is_scanning,
  peripherals: state.peripherals.peripherals
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRestaurant,
  fetchPeripheralDetail,
  fetchCustomerRestaurantId
}, dispatch)

const connectedCardRestaurant = connect(mapStateToProps, mapDispatchToProps)(CardRestaurant)

export default connectedCardRestaurant
