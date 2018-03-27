'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Bar } from 'react-native-pathjs-charts'

class BarChartColumnBasic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: []
    }
  }
  componentWillMount () {
    let getData = [
      { name: 'Indomie Vegie', quantity: 14 },
      { name: 'Rainbow Sandwich', quantity: 3 },
      { name: 'Christmas Pie', quantity: 21 },
      { name: 'Pisang Vegie', quantity: 4 },
      { name: 'Bakar Sandwich', quantity: 23 },
      { name: 'Roti Pie', quantity: 11 },
      { name: 'jus Vegie', quantity: 4 },
      { name: 'Sate Sandwich', quantity: 3 }
    ]
    
    function compare(a, b) {
      let comparison = 0;
      if (a.quantity < b.quantity) {
        comparison = 1;
      } else if (a.quantity > b.quantity) {
        comparison = -1;
      }
      return comparison;
    }

    let dataSort = getData.sort(compare)

    //max 5 foods
    let dataFilter = []
    for (var i = 0; i < dataSort.length; i++) {
      if (i < 5) {
        dataFilter.push(dataSort[i])
      } else {
        break
      }
    }

    let datas = dataFilter.map(data => {
      return [{
        'name' : data.name,
        'total' : data.quantity
      }]
    })
    
    this.setState({
      datas
    })
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Bar (Column) - Basic`,
  });

  render() {
    let data = [
      [{
        "total": 49,
        "name": "Indomie Carbonara"
      }],
      [{
        "total": 69,
        "name": "Rainbow Sandwich"
      }],
      [{
        "total": 29,
        "name": "grape"
      }],
      [{
        "total": 10,
        "name": "grape"
      }],
      [{
        "total": 12,
        "name": "grape"
      }]
    ]

    let options = {
      width: 300,
      height: 300,
      margin: {
        top: 20,
        left: 25,
        bottom: 60,
        right: 20
      },
      color: '#e3af2f',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E',
          rotate: 45
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (
      <View style={styles.container}>
        <Bar data={this.state.datas} options={options} accessorKey='total'/>
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

export default BarChartColumnBasic;
