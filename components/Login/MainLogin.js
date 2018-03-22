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
  ListItem } from 'native-base';

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
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button warning style={styles.submit}>
            <Text> Click Me! </Text>
          </Button>
        </Content>
      </Container>
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

export default MainLogin;
