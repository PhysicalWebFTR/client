import React, { Component } from 'react'
import { connect } from 'react-redux'
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

import Spinner from 'react-native-spinkit'; // for showing a spinner when loading something 

class CardRestaurant extends Component {

  constructor(props) {
    super(props)
  }

  _clickMoveToSelectMenu = (id) => {
    const { navigate } = this.props.navigation
    navigate('SelectTable', { id: id })
  }

  render() {
    if (this.props.is_scanning) {
      return (
        <Container style={styles.loading}>
          <Spinner 
            size={50} 
            type={"WanderingCubes"} 
            color={"#6097FC"} 
            style={styles.spinner}
          />
        </Container>
      )
    } else if (this.props.peripherals) {
      return (
        <Container>
          <Content style={styles.card}>
          {
            this.props.peripherals.map((peripheral, idx) =>(
              <Card key={idx}>
              <CardItem>
                <Body style={styles.cardBody}>
                  <Left>
                    <Text>
                      {peripheral.name}
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
            ))
          }
          </Content>
        </Container>
      )
    } else {
      return ''
    }
  }

}

const styles = StyleSheet.create({
  card: {
    margin: 8
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'row'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = state => ({
  is_scanning: state.restaurants.is_scanning,
  peripherals: state.restaurants.peripherals
})

const connectedCardRestaurant = connect(mapStateToProps)(CardRestaurant)

export default connectedCardRestaurant
