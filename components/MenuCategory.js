import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { 
  Container, 
  Text
} from 'native-base'

import CardMenu from './CardMenu'

class MenuCategory extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: ['a', 'b', 'c']
    }
  }

  _keyExtractor = (item, index) => item.itemId

  render() {

    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          horizontal={false}
          // numColumns='2'
          renderItem={({ item }) =>
            <CardMenu/>
          }
        />
      </Container>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginLeft: 6,
    marginTop: 8
  }
})

export default MenuCategory