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
import * as Animatable from 'react-native-animatable';

export default class EditMenu extends Component {
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
    if (!this.props.isEdit) {
      return <Content/>
    } else {
      return (
        <Animatable.View animation="slideInDown" direction="alternate"> 
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
                <Text> Edit Item </Text>
              </Button>
            </Left>
          </Content>
        </Animatable.View>
      )
    }
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 5,
    justifyContent: 'center',
    width: 400,
  },
});