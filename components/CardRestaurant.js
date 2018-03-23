import React, { Component } from 'react'

import { StyleSheet } from 'react-native'

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
  Right
} from 'native-base'

class CardRestaurant extends Component {

  constructor(props) {
    super(props)
  }

  _clickMoveToSelectMenu = (id) => {
    const { navigate } = this.props.navigation
    navigate('SelectTable', { id: id })
  }

  render() {
    
    return (
      <Container>
        <Content style={styles.card}>
          <Card >
            <CardItem>
              <Body style={styles.cardBody}>
                <Left>
                  <Text>
                    Restaurant Name
                  </Text>
                </Left>
                <Right>
                  <Button success
                    onPress={() => this._clickMoveToSelectMenu('-owuvgoe3f')}>
                    <Text> Connect </Text>
                  </Button>
                </Right>

              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  card: {
    margin: 8
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row'
  }
})


export default CardRestaurant
