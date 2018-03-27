'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Pie } from 'react-native-pathjs-charts'

class PieChartBasicAnimation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data : []
    }
  }
  componentWillMount () {
    let data = [ { name: 'FOOD', quantity: 4 },
    { name: 'DESSERT', quantity: 1 },
    { name: 'BEVERAGE', quantity: 2 } ]

    this.setState({
      data
    })
  }

  render() {
    let data = [{
      "name": "Food",
      "total": 12
    },
     {
      "name": "Beverage",
      "total": 30
    }, {
      "name": "Dessert",
      "total": 15,
      "color": {'r':223,'g':154,'b':20}
    }
  ]

    let options = {
      margin: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      },
      width: 350,
      height: 350,
      color: '#2980B9',
      r: 50,
      R: 150,
      legendPosition: 'topLeft',
      animate: {
        enabled: true,
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: true,
        color: '#ECF0F1'
      }
    }

    return (
      <View style={styles.container}>
        <Pie data={this.state.data}
          // options={options}
          accessorKey="quantity"
          margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
          color="#2980B9"
          pallete={
            [
              { 'r': 25, 'g': 99, 'b': 201 },
              { 'r': 24, 'g': 175, 'b': 35 },
              { 'r': 190, 'g': 31, 'b': 69 },
              { 'r': 100, 'g': 36, 'b': 199 },
              { 'r': 214, 'g': 207, 'b': 32 },
              { 'r': 198, 'g': 84, 'b': 45 }
            ]
          }
          r={30}
          R={150}
          // legendPosition="topRight"
          label={{
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: true,
            color: '#ECF0F1'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default PieChartBasicAnimation;
