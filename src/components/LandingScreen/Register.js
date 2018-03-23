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

  static navigationOptions = {
    title: 'Register'
  }

  render() {
    return (
      <Content>
        <Form>
          <Item floatingLabel last>
            <Input
              onChangeText={(email) => this.setState({email})}
              placeholder="Email"
            />
            <Icon name="md-mail"/>
          </Item>
          <Item floatingLabel>
            <Input
              placeholder="Full Name"
              onChangeText={(name) => this.setState({name})}
            />
            <Icon name="md-person"/>
          </Item>
          <Item floatingLabel last>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
            />
            <Icon name="md-key"/>
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
