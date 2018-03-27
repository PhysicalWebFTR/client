'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Pie } from 'react-native-pathjs-charts'
import TablePie from './tablePie'

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
    return (
      <View>
        <View style={styles.container}>
          <Text> Order By Category </Text>
          <Pie data={this.state.data}
            // options={options}
            accessorKey="quantity"
            margin={{ top: 20, bottom: 20 }}
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
            height={350}
          />
        </View>
        <View>
          <TablePie data={this.state.data}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
});

export default PieChartBasicAnimation;
