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
  Icon, 
  Title} from 'native-base';

class LandingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  handleSubmit = () => {
    var { navigate } = this.props.navigation
    navigate('SearchRestaurant')
  }

  static navigationOptions = {
    title: 'Login',
    headerVisible: false
  }

  render() {
    var { navigate } = this.props.navigation
    return (
      // <Register/> //Ini buat register

      //Ini isi benerannya

        <Content>
        <Form>
          <Item floatingLabel last>
            <Input
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
            />
            <Icon name="md-mail" />
          </Item>
          <Item floatingLabel last>
            <Input 
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
            />
            <Icon name="md-key" />
          </Item>
        </Form>
        <Left>
          <View style={styles.action}>
            <Button warning 
              style={styles.button}
              onPress={() => this.handleSubmit()}
              >
              <Text> Submit </Text>
            </Button>
            <Button warning 
              style={styles.button}
              onPress={() => navigate('Register')}
              >
              <Text> Register </Text>
            </Button>
          </View>
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
  action: {
    margin: 10
  }
});

export default LandingScreen;