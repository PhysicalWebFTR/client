import React, { Component } from 'react'

import { 
  Container, 
  Text
} from 'native-base'

class CardOrder extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return(
      <Container>
        <Text>Card Order</Text>
      </Container>
    )
  }
}

export default CardOrder