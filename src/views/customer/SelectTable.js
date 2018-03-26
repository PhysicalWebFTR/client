import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
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
  componentWillMount () {
    console.log('oooi', this.props)
  }

  onBarCodeRead = (e) => {
    // this.setState({qrcode: e.data})
    this.props.fetchCustomerTable(e.data)
    const { navigate } = this.props.navigation
    navigate('ListMenu')
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

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCustomerTable
}, dispatch)

const connectedSelectTable = connect(null, mapDispatchToProps)(SelectTable)

export default connectedSelectTable