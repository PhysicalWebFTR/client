import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

  static navigationOptions = ({ navigation }) => {
    const name = 'Select Table'
    return {
      title: name
    }
  }

  // constructor(props) {
  //   super(props)
  //   const { navigate } = this.props.navigation
  // }

  // _clickMoveToSelectMenu = (id) => {
  //   const { navigate } = this.props.navigation
  //   navigate('ListMenu', { id: id })
  // }
  componentWillMount () {
    console.log('oooi', this.props)
  }

  handleSubmit = () => {
    this.props.fetchCustomerTable(this.state.tableNum)
    const { navigate } = this.props.navigation
    navigate('ListMenu')
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Card style={styles.card}>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Input onChangeText={(tableNum) => this.setState({tableNum})} keyboardType="numeric" style={styles.inputItem} />
              </Item>
              <Button 
              block 
              success 
              onPress={() => this.handleSubmit()}>
                <Text>Submit</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  content: {
    margin: 8,
    flex: 1
  },
  card: {
    flex: 1
  },
  form: {
    flex: 1
  },
  inputItem: {
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCustomerTable
}, dispatch)

const connectedSelectTable = connect(null, mapDispatchToProps)(SelectTable)

export default connectedSelectTable