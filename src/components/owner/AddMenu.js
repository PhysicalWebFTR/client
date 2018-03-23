import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import { 
  Container, 
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Right,
  ListItem,
  Left,
  Text,
  Icon } from 'native-base';

export default class AddMenu extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      price: 0,
      imageUrl: '',
      desc: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hai')
  }

  render() {
    return ( 
      <Content>
        <Form>
          <Item floatingLabel last>
            <Input
              placeholder="Food Name"
              onChangeText={(name) => this.setState({name})}
            />
            <Icon name="md-pizza" />
          </Item>
          <Item floatingLabel last>
            <Input type="number"
              placeholder="Price"
              onChangeText={(price) => this.setState({price})}
            />
            <Icon name="md-pricetag" />
          </Item>
          <Item floatingLabel last>
            <Input
              placeholder="Food Image"
              onChangeText={(imageUrl) => this.setState({imageUrl})}
            />
            <Icon name="md-image" />
          </Item>
          <Item floatingLabel last>
            <Input
              multiline={true}
              placeholder="Description"
              onChangeText={(desc) => this.setState({desc})}
            />
            <Icon name="md-create" />
          </Item>
        </Form>
        <Left>
          <Button warning 
            style={styles.button}
            onPress={() => this.handleSubmit()}
            >
            <Text> Add Item </Text>
          </Button>
        </Left>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    justifyContent: 'center',
    width: 300,
  },
});