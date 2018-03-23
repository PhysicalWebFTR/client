import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

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

class SelectTable extends Component {

  static navigationOptions = ({ navigation }) => {
    const name = 'Select Table'
    return {
      title: name
    }
  }

  constructor(props) {
    super(props)
    const { navigate } = this.props.navigation
  }

  _clickMoveToSelectMenu = (id) => {
    const { navigate } = this.props.navigation
    navigate('ListMenu', { id: id })
  }


  render() {
    return (
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Card style={styles.card}>
            <Form style={styles.form}>
              <Item floatingLabel>
                <Input keyboardType="numeric" style={styles.inputItem} />
              </Item>
              <Button 
              block 
              success 
              onPress={() => this._clickMoveToSelectMenu('-Ls9hq0evb')}>
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

export default SelectTable