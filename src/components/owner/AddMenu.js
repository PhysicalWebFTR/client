import React, { Component } from 'react';
import {  View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
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
    this.bounce()
    e.preventDefault()
  }
  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));

  render() {
    return (
        <Content>
          <Animatable.View animation="fadeInDown" direction="alternate"> 
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
              <Animatable.View ref={this.handleViewRef}>
              <Text> Add Item </Text>
              </Animatable.View>
            </Button>
          </Left>
          </Animatable.View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    margin: 5,
    justifyContent: 'center',
    width: 400
  },
});