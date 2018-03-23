import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import {
  Card,
  CardItem,
  Body,
  Text,
  Container,
  Button
} from 'native-base'

class CardMenu extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Card style={styles.card}>
          <CardItem header>
            <Text>NativeBase</Text>
          </CardItem>
          <CardItem style={styles.body}>
            <Body>
              <Text>
                Crispy Spicy Salmon Aburi Roll
              </Text>
              <Text>
                Rp xxx
              </Text>
            </Body>
          </CardItem>
          <CardItem footer style={styles.footer}>
            <Button block success style={styles.button}>
              <Text>Add</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    )
  }

}

const { width } = Dimensions.get('window');
// const itemWidth = (width - 15) / 2;
const itemWidth = (width - 15);

const styles = StyleSheet.create({
  container: {
    height: 250
  },
  body: {
    height: 170,
  },
  card: {
    minWidth: itemWidth,
    maxWidth: itemWidth
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    flex: 1
  }
})

export default CardMenu
