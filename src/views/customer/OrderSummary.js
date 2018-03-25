import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Button } from 'native-base';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItemAction } from '../../store/actions'

class OrderSummary extends Component {
  static navigationOptions = ({ navigation }) => {
    const name = 'Order Summary'
    return {
      title: name
    }
  }
  
  showAlert(menuId) {
    let foods = this.state.orderLists
    var index = foods.findIndex(food => {
      return foodRootStack.menuId === menuId
    })
    foods.splice(index, 1);
    this.setState({orderLists: foods})
    if (foods.length == 0) {
      console.log('Pindah cuy')
    }
  }

  handleAdd(item) {
    console.log('ini item', item)
    this.props.addItemAction(item, this.props.menuList)
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
          { this.props.menuList.map( list => {
            return (
              <CardItem key={list.menuId} bordered style={{flex: 1, flexWrap: 'wrap'}}>
                <View style={styles.container}>
                  <Left>
                    <Text>
                      {list.name}
                    </Text>
                  </Left>
                  <Right>
                    <Text style={{margin:5}}>
                      {list.price}
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
                        onPress={() => {
                          if (list.quantity > 1) {
                            this.setState({
                              menuId: list.menuId,
                              quantity: list.quantity--
                            })
                          } else {
                            Alert.alert(
                              'Remove Item?',
                              'This item will be removed from your cart',
                              [
                                {
                                  text: 'Yes', onPress: () => {
                                    this.showAlert(list.menuId)
                                  }
                                },
                                {text: 'No'},
                              ],
                              { cancelable: false }
                            )
                          }
                        }}
                        >
                        <Text style={styles.insideButton}>-</Text>
                      </Button>
                      <Button style={styles.button} bordered warning>
                        <Text style={styles.insideButton}>{list.quantity}</Text>
                      </Button>
                      <Button 
                        style={styles.button} bordered warning
                        onPress={() => this.handleAdd(list)}
                      >
                        <Text style={styles.insideButton}>+</Text>
                      </Button>
                    </View>
                  </Right>
                </View>
              </CardItem>
            )
          })}
          
        </Card>
        <View>
          <Button style={styles.submit} block warning>
            <Text> Order </Text>
          </Button>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  menuList: state.customer.menuList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItemAction
}, dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary)