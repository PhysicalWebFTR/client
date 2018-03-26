import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Card, CardItem, Body, Left, Right, Button } from 'native-base';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeStatusAction } from '../../store/actions/fetchOwners' 
class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefresh: false
    }
  }

  // handleButton = (item) => {
  //   let itemStates = this.state.orderLists
  //   let index = itemStates.findIndex(itemState => {
  //     return itemState.menuId._id === item.menuId._id
  //   })
  //   itemStates[index].isReady = !item.isReady
  //   this.setState({
  //     itemStates
  //   })
  // }

  handleButton = (item) => {
    this.props.changeStatusAction(item, this.props.orderLists)
    let isRefresh = !this.state.isRefresh
    this.setState({
      isRefresh
    })
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

const mapStateToProps = state => ({
  orderLists: state.owner.orderLists
})

const mapDispatchToProps = dispatch => ({
  changeStatusAction
})

export default connect(mapStateToProps,mapDispatchToProps)(OrderList)