import React, { Component } from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button,
  Left,
  Right,
  Icon
} from 'native-base'

class CardMenu extends Component {

  constructor(props){
    super(props)
  }

  render() {
    const imageUrl = 'https://scontent-sit4-1.cdninstagram.com/vp/0ec4c984bff82516b657ed62a5f07b56/5B3916E1/t51.2885-15/s640x640/sh0.08/e35/25013783_311713692651669_4180162197407662080_n.jpg'

    return (
        <Card>
          <CardItem cardBody>
            <Image source={{ uri: imageUrl }}
              style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.textName}>Menu Name</Text>
                <Text note>Rp. xxx.xxx</Text>
                <Text note style={styles.textName}>Description lorem ipsum sir doler amit ...</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Button block success style={styles.button}>
              <Text>Add</Text>
            </Button>
          </CardItem>
        </Card>
    )
  }
}


const { width } = Dimensions.get('window');
const itemWidth = (width - 15);

const styles = StyleSheet.create({
  image: {
    height: width,
    width: width,
    resizeMode: 'contain'
  },
  textName: {
    fontStyle: "italic"
  },
  textDescription: {

  },
  button: {
    flex: 1
  }
})

export default CardMenu
