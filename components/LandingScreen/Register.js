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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          </Item>
          <Item floatingLabel>
            <Label>Full Name</Label>
            <Input 
              onChangeText={(name) => this.setState({name})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input 
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
        </Form>
        <Left>
          <Button warning 
            style={styles.submit}
            onPress={() => this.handleSubmit()}
            >
            <Text> Submit </Text>
          </Button>
        </Left>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  submit: {
    margin: 10,
    justifyContent: 'center',
    width: 300,
  },
});

export default Register;
