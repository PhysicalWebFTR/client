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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addItemAction from '../../store/actions'

class CardMenu extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const imageUrl = 'https://scontent-sit4-1.cdninstagram.com/vp/0ec4c984bff82516b657ed62a5f07b56/5B3916E1/t51.2885-15/s640x640/sh0.08/e35/25013783_311713692651669_4180162197407662080_n.jpg'
    let { foodItem } = this.props
    return (
        <Card>
          <CardItem cardBody>
            <Image source={{ uri: foodItem.photoUrl }}
              style={styles.image} />
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text style={styles.textName}>{foodItem.name}</Text>
                <Text note>Rp. {foodItem.price}</Text>
                <Text note style={styles.textDescription}>{foodItem.description}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Button 
              block success style={styles.button}
              onPress={() => this.props.addItemAction(foodItem)}  
            >
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
    fontWeight: "bold"
  },
  textDescription: {
    fontStyle: "italic"
  },
  button: {
    flex: 1
  }
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addItemAction
}, dispatch)

export default connect(null, mapDispatchToProps)(CardMenu)