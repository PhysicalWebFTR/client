import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
  Icon } from 'native-base';

import Register from '../components/LandingScreen/Register'

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  handleSubmit = () => {
    console.log('ini submit', this.state)
  }

  render() {
    return (
        <Content>
        <Form>
          <Item floatingLabel last>
            <Label>Email</Label>
            <Input
              onChangeText={(email) => this.setState({email})}
            />
            <Icon name="md-mail" />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input 
              onChangeText={(password) => this.setState({password})}
            />
            <Icon name="md-key" />
          </Item>
        </Form>
        <Left>
          <Button warning 
            style={styles.button}
            onPress={() => this.handleSubmit()}
            >
            <Text> Log In </Text>
          </Button>
          <Button warning 
            style={styles.button}
            >
            <Text> Sign Up </Text>
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

export default LandingScreen;