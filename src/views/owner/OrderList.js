import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, CardItem, Body, Left, Right, Button } from 'native-base';

export default class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderLists : [
        {
          table: {
            _id: '21321321',
            name: '2'
          },
          menuId: {
              _id: '5ab7c1b3f36d2827509386e6',
              name: 'Mojitos Punch (3)',
              photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F79%2F61%2F22%2F7961222ddabcdce766f5e4a0a9ace0ec.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F508695720382353558%2F&doc\'id\'=8pF0bb1FpS6flM&tbn\'id\'=zbGnUx9mF5NjFM%3A&vet=10ahUKEwio5IfJv4HaAhULpo8KHTX9AsAQMwjPASgAMAA..i&w=1000&h=1000&hl=en&bih=711&biw=1421&q=beverages%20drinks&ved=0ahUKEwio5IfJv4HaAhULpo8KHTX9AsAQMwjPASgAMAA&iact=mrc&uact=8',
            },
          quantity: '2',
          isReady: false
        },
        {
          table: {
            _id: '21321321',
            name: '2'
          },
          menuId: {
            _id: '5ab7bff5f36d282750938639',
            name: 'Indomie Vegie',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/7414e219679c494efbbc970abdf13df2/5B33EA0B/t51.2885-15/s640x640/sh0.08/e35/23596447_2016755885267741_964127154730172416_n.jpg',
            description: null,
            price: 16000,
            category: 'FOOD'
            },
          quantity: '3',
          isReady: false
        }, {
          table: {
            _id: '213213213',
            name: '3'
          },
          menuId: {
            _id: '5ab7c00df36d28275093863b',
            name: 'Rainbow Sandwich',
            photoUrl: 'https://media.travelingyuk.com/wp-content/uploads/2017/12/Roti-bakar-pelangi.jpg',
            description: null,
            price: 18000,
            category: 'FOOD'
          },
          quantity: 2,
          isReady: true
        }
      ]
    }
  }

  handleButton = (item) => {
    let itemStates = this.state.orderLists
    let index = itemStates.findIndex(itemState => {
      return itemState.menuId._id === item.menuId._id
    })
    itemStates[index].isReady = !item.isReady
    this.setState({
      itemStates
    })
  }

  render() {
    return (
      <View>
        <FlatList
          extraData={this.state}
          data={this.state.orderLists}
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

  // getPusherData () {
  //   var pusher = new Pusher('878d5b48666a27d89b79', {
  //     cluster: 'ap1',
  //     encrypted: true
  //   });

  //   var channel = pusher.subscribe('restaurant-channel');
  //   channel.bind('get-order-data', (data) => {
  //     console.log('state order-data : ', data)
      
  //   });

  //   channel.bind('restaurant-data-failed', (data) => {
  //     Alert.alert('Error connection, please try again')
  //   })
  // }
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