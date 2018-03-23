import React, { Component } from 'react'

import { View, Text } from 'react-native'

class OrderSummary extends Component {

  static navigationOptions = ({ navigation }) => {
    const name = 'Order Summary'
    return {
      title: name
    }
  }

  render() {
    return (
      <View>
        <Text>Summary List Here !</Text>
      </View>
    )
  }

}

export default OrderSummary