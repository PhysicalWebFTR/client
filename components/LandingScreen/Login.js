import React, { Component } from 'react';

class Login extends Component {
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

export default Login;