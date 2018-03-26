import React, { PureComponent } from 'react';
import { StyleSheet, View, Alert, FlatList } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right, Button } from 'native-base';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addItemAction } from '../../store/actions'

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
  componentDidMount () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let totalPrice = this.props.menuList.map(item => item.price * item.quantity)
    totalPrice = totalPrice.reduce(reducer)
    this.setState({totalPrice})
  }

  componentDidUpdate () {
    console.log('menu list: ', this.props.menuList)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let totalPrice = this.props.menuList.map(item => item.price * item.quantity)
    totalPrice = totalPrice.reduce(reducer)
    this.setState({totalPrice})
  }

  handleAdd(item) {
    let isRefresh = !this.state.isRefresh
    this.setState({
      isRefresh
    })
    console.log(this.state.isRefresh)
    console.log('ini item', item)
    this.props.addItemAction(item, this.props.menuList)
  }
  
  render() {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue
    // let totalPrice = this.props.menuList.map(item => item.price)
    // console.log('ini total price: ', totalPrice)
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
                      Rp. {item.price}
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
                          if (item.quantity > 1) {
                            this.setState({
                              menuId: item.menuId,
                              quantity: item.quantity--
                            })
                          } else {
                            Alert.alert(
                              'Remove Item?',
                              'This item will be removed from your cart',
                              [
                                {
                                  text: 'Yes', onPress: () => {
                                    this.showAlert(item.menuId)
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
        <Text>{this.state.totalPrice}</Text>
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