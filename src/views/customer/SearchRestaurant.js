import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  
  AppRegistry,
  Platform,
  PermissionsAndroid, // for checking if certain android permissions are enabled
  StyleSheet,
  View,
  NativeEventEmitter, // for emitting events for the BLE manager
  NativeModules, // for getting an instance of the BLE manager module
  ToastAndroid, // for showing notification if there's a new attendee
  FlatList, // for creating lists
  Alert,
  Button
} from 'react-native';
import { Container, Icon, Text } from 'native-base'

import BleManager from 'react-native-ble-manager'; // for talking to BLE peripherals
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule); // create an event emitter for the BLE Manager module

import {
  fetchRestaurants,
  fetchRestaurantsLoading,
  fetchRestaurantsReset
} from '../../store/actions'

import { stringToBytes } from 'convert-string'; // for converting string to byte array
import RandomId from 'random-id'; // for generating random user ID
import bytesCounter from 'bytes-counter'; // for getting the number of bytes in a string
import Pusher from 'pusher-js/react-native'; // for using Pusher inside React Native
import Spinner from 'react-native-spinkit'; // for showing a spinner when loading something 

import CardRestaurant from '../../components/customer/CardRestaurant'

class SearchRestaurant extends Component {
  constructor(props){
    super(props)
    this.state = {
      is_scanning: false, // whether the app is currently scanning for peripherals or not
      peripherals: null, // the peripherals detected
      connected_peripheral: null, // the currently connected peripheral
      // user_id: null, // the ID of the current user
      dataRestaurants: null, // the dataRestaurants currently synced with the app
      // has_attended: false // whether the current user has already attended
    }
    this.peripherals = [];
  }

  componentWillMount() {
    console.log('BleManager : ',BleManager)
    this.checkBluetooth()
    this.startBleManager()
    this.enableBluetooth()
  }

  componentDidMount() {
    console.log(this.props, 'ini props')
    this.addListenerDiscoverPeripheral()
    this.addListenerStopScan()
    this.getPusherData()
  }
  
  checkBluetooth() {
    BleManager.enableBluetooth()
      .then(() => {
        console.log('Bluetooth is already enabled');
      })
      .catch((error) => {
        console.log(error, 'kenapa nih')
        Alert.alert('You need to enable bluetooth to use this app.');
      });
  }

  startBleManager() {
    BleManager.start({ showAlert: false })
      .then(() => {
        console.log('SUCCESS START BLE MANAGER');
      });
  }

  enableBluetooth() {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
        if (!result) {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION).then((result) => {
            if (!result) {
              Alert.alert('You need to give access to coarse location to use this app.');
            }
          });
        }
      });
    }
  }

  addListenerDiscoverPeripheral() {
    bleManagerEmitter.addListener('BleManagerDiscoverPeripheral', (peripheral) => {
      // console.log('state addListenerDiscoverPeri Before: ', peripheral)
      if (peripheral.name === 'Central Resto' || peripheral.name === 'Fuadi Resto') {
        console.log('state addListenerDiscoverPeri Fix : ', peripheral)
        var peripherals = this.peripherals;
        // check if the peripheral already exists 
        var el = peripherals.filter((el) => {
          return el.id === peripheral.id;
        })
        if(!el.length){
          peripherals.push({
            id: peripheral.id, // mac address of the peripheral
            name: peripheral.name // descriptive name given to the peripheral
          })
          this.props.fetchRestaurants(peripherals)
          this.peripherals = peripherals; // update the array of peripherals
        }
      }
    })
  }

  addListenerStopScan() {
    console.log('state addListenerStopScan')
    bleManagerEmitter.addListener(
      'BleManagerStopScan',
      () => {
        console.log('scan stopped');
        this.props.fetchRestaurantsLoading(false)
        if(this.peripherals.length == 0){
          Alert.alert('Nothing found', "Sorry, no peripherals were found");
        }
        this.setState({
          is_scanning: false,
          peripherals: this.peripherals
        });  
      }
    );
  }

  getPusherData () {
    var pusher = new Pusher('627a447d139cd94fcfbb', {
      cluster: 'ap1',
      encrypted: true
    });

    var channel = pusher.subscribe('attendance-channel');
    channel.bind('attendance-event', (data) => {
      console.log('state attendance-event : ', data)
      if(data.is_attendees) {
        this.setState({
          dataRestaurants: data.attendees
        });
      } else {
        ToastAndroid.show(`${data.full_name} just entered the room!`, ToastAndroid.LONG);
        this.setState({
          dataRestaurants: [...this.state.dataRestaurants, data]
        });
      }
    });
  }

  handleScan = () => {
    console.log('state startScan', this.props)
    this.props.fetchRestaurantsReset()
    this.peripherals = [];
    this.setState({
      is_scanning: true
    })

    this.props.fetchRestaurantsLoading(true)

    BleManager.scan([], 2)
    .then(() => {
      console.log('scan started');
    });
  }

  connect = (peripheralId = 'B8:27:EB:5F:7C:84') => {
    console.log('state Connect Peripheral')
    BleManager.connect(peripheralId)
      .then(() => {
        this.setState({
          connected_peripheral: peripheralId
        });
        Alert.alert('Connected!', 'You are now connected to the peripheral.');
        // retrieve the services advertised by this peripheral
        BleManager.retrieveServices(peripheralId)
          .then((peripheralInfo) => {
            console.log('Peripheral info:', peripheralInfo);
            BleManager.disconnect(peripheralId)
              .then(() => {
                Alert.alert('Attended', 'You have successfully attended the event, please disable bluetooth.');
              })
              .catch((error) => {
                Alert.alert('Error disconnecting', "You have successfully attended the event but there's a problem disconnecting to the peripheral, please disable bluetooth to force disconnection.");
              });
          })
      })
      .catch((error) => {
        console.log(error)
        Alert.alert("Err..", 'Something went wrong while trying to connect.');
      });
  }

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    const name = 'Search Restaurant'
    return {
      title: name,
      headerRight:
        <Icon
        style={{ color: '#fff', marginRight: 15 }}
        ios='ios-sync' android="md-sync"
        size={35}
        onPress={() => console.log(SearchRestaurant.handleScan())}
        />,
      drawerIcon: ({ tintColor }) => (
        <Icon name="home" size={24} style={{ color: tintColor }} />
      ),
      headerLeft:
        <Icon
          style={{color: '#fff'}}
          ios='ios-menu' android="md-menu"
          size={35}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
    }
  };

  render(){
    const navigation = this.props.navigation
    return (
      <Container>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
          <Button title="Scan" onPress={() => this.handleScan()}></Button>
          {/* <Button title="Connect" onPress={() => this.connect('74:C6:3B:04:2B:32')}></Button> */}
        </View>
        <CardRestaurant navigation={navigation}/>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  buttonScan: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = state => ({
  is_scanning: state.restaurants.is_scanning,
  peripherals: state.restaurants.peripherals
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchRestaurants,
  fetchRestaurantsLoading,
  fetchRestaurantsReset
}, dispatch)

const connectedSearchRestaurant = connect(mapStateToProps, mapDispatchToProps)(SearchRestaurant)

export default connectedSearchRestaurant

AppRegistry.registerComponent('SearchRestaurant', () => SearchRestaurant);