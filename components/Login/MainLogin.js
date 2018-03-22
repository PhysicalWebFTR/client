import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,  Radio, Right, ListItem } from 'native-base';

class MainLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Gender</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Date of Birth</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    backgroundColor: '#0e4749'
  },
});

export default MainLogin;
