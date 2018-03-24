import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Button } from 'native-base';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orderLists: [
          {
            menuId: 'Indomie Carbonara',
            quantity: 3,
            price: 22000
          },{
            menuId: 'Sushimie',
            quantity: 2,
            price: 18000
          }, {
            menuId: 'ketigadsfad',
            quantity: 1,
            price: 12000
          }
        ]
    };

  }

  static navigationOptions = ({ navigation }) => {
    const name = 'Order Summary'
    return {
      title: name
    }
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
          { this.state.orderLists.map( list => {
            return (
              <CardItem bordered style={{flex: 1, flexWrap: 'wrap'}}>
                <View key={list} style={styles.container}>
                  <Left>
                    <Text>
                      {list.menuId}
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
                          console.log(list.quantity)
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
                                    let foods = this.state.orderLists
                                    var index = foods.findIndex(food => {
                                      return food.menuId === list.menuId
                                    })
                                    foods.splice(index, 1);
                                    this.setState({orderLists: foods})
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
                        onPress={() => {
                          this.setState({
                            menuId: list.menuId,
                            quantity: list.quantity++
                          })
                        }}
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

export default OrderSummary;