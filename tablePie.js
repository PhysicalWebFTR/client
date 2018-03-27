import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
 
class tableView extends Component {
  constructor(props){
    super(props)
    this.state = {
      tableHead: [],
      tableData: [],
      total: 0
    }
  }

  componentWillMount() {
    let tableHead = []
    let tableRow = []

    let rowTotal = this.props.data.map(x => {
      return x.quantity
    })
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let total = rowTotal.reduce(reducer)
    console.log(total)
    // console.log(array1.reduce(reducer))
    this.props.data.forEach(x => {
      tableHead.push(x.name)
      let percentage = Math.floor(x.quantity/total*1000)/10
      tableRow.push(`${percentage}%`)
    })
    let tableData = []
    tableData.push(tableRow)
    this.setState({
      tableHead,
      tableData,
      total
    })
  }

  componentDidMount() {
    console.log(this.state)
  }

  render() {
    // const tableHead = ['Head', 'Head2', 'Head3', 'Head4'];
    const tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];
  
    return (
      <View style={styles.table}>
        <Table>
          <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={this.state.tableData} style={styles.row} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  table: { margin: 15},
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { marginLeft: 5 },
  row: { height: 30 },
})

export default tableView