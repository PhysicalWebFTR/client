import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Camera from 'react-native-camera';
import {
  Container,
  Card,
  CardItem,
  Text,
  Button,
  Content,
  Form,
  Item,
  Label,
  Input
} from 'native-base'

import { fetchCustomerTable } from '../../store/actions'

class SelectTable extends Component {
  // componentWillMount () {
  //   Alert.alert('Please help me')
  // }
  constructor () {
    super()
    this.state = {
      isScan: false
    }
  }

  onBarCodeRead = (e) => {
    if (!this.state.isScan) {
      // Alert.alert(e.data)
      // this.setState({qrcode: e.data})
      console.log('table List : ', this.props.tableList)
      var tablesIdIdx = this.props.tableList.findIndex(table => table._id === e.data)
      console.log(tablesIdIdx)
      if (tablesIdIdx !== -1) {
        this.setState({ isScan: true })
        this.props.fetchCustomerTable(e.data)
        const { navigate } = this.props.navigation
        navigate('ListMenu')
      } else {
        Alert.alert('Please scan valid table')
      }
    }
  }

  render() {
    return (
      <View  style={styles.container}>
        {/* <View style={styles.camera}> */}
          <Camera
            style={styles.preview}
            onBarCodeRead={this.onBarCodeRead}
            ref={cam => this.camera = cam}
            aspect={Camera.constants.Aspect.fill}
            >
                {/* <Text style={{
                    backgroundColor: 'white'
                }}>{this.state.qrcode}</Text> */}
            </Camera>
          {/* </View> */}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    width: 273,
    height: 273
  },
})

const mapStateToProps = state => ({
  tableList: state.restaurant.tableList
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCustomerTable
}, dispatch)

const connectedSelectTable = connect(mapStateToProps, mapDispatchToProps)(SelectTable)

export default connectedSelectTable