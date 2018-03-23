import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Icon } from 'native-base';
// import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

export default class ListMenu extends Component {
  constructor () {
    super()
    this.state = {
      list: [{
        name: 'indomie',
        imageUrl: 'http://www.indomie.com/Content/Product/Category/indomie-goreng.jpg',
        price: 5000,
        desc: 'lorem ipsum dolor sadasd asd sad sad jcxvnxcm tobi rama senju hashirama naruto hokage ke empat'
      },{
        name: 'indomie',
        imageUrl: 'http://www.indomie.com/Content/Product/Category/indomie-goreng.jpg',
        price: 5000,
        desc: 'lorem ipsum dolor sadasd asd sad sad jcxvnxcm tobi rama senju hashirama naruto hokage ke empat'
      },{
        name: 'indomie',
        imageUrl: 'http://www.indomie.com/Content/Product/Category/indomie-goreng.jpg',
        price: 5000,
        desc: 'lorem ipsum dolor sadasd asd sad sad jcxvnxcm tobi rama senju hashirama naruto hokage ke empat'
      },]
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <List
           dataArray={this.state.list}
           renderRow={(detail) => (
            <ListItem
              onPress={() => console.log('hai')} >
              <Thumbnail square size={80} source={{ uri: detail.imageUrl }} />
              <Body>
                <Text>{detail.name}</Text>
                <Text note>{detail.desc.substr(0, 50)} ...</Text>
                <Text style={{color: '#49a078'}}>Rp. {detail.price}</Text>
              </Body>
            </ListItem>
           )} >
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
  }
});