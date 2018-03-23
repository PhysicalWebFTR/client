import React, { Component } from 'react';
import {  View, Image } from 'react-native';
import { Container, Header, Content, Icon, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

import EditMenu from './EditMenu'

export default class DetailMenu extends Component {
  constructor () {
    super()
    this.state = {
      detail: {
        name: 'indomie',
        imageUrl: 'http://www.indomie.com/Content/Product/Category/indomie-goreng.jpg',
        price: 5000,
        desc: 'lorem ipsum dolor sadasd asd sad sad jcxvnxcm tobi rama senju hashirama naruto hokage ke empat'
      },
      isEdit: false
    }
  }
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail/>
                <Body>
                  <Text style={{fontSize: 25}}>{this.state.detail.name}</Text>
                  <Text style={{color: '#49a078'}}>Rp. {this.state.detail.price}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.state.detail.imageUrl}} style={{height: 250, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text style={{color: '#585858'}}>{this.state.detail.desc}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={() => this.setState({ isEdit: !this.state.isEdit })} >
                  <Icon active name="md-create" />
                  <Text>Edit</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent danger>
                  <Icon active name="trash" />
                  <Text>Delete</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <EditMenu isEdit={this.state.isEdit} />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
