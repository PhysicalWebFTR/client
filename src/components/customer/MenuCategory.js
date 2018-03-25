import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { 
  Container, 
  Text
} from 'native-base'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import CardMenu from './CardMenu'

class MenuCategory extends Component {

  constructor(props){
    super(props)

    this.state = {
      data: ['a', 'b', 'c']
    }
  }

  static navigationOptions = ({navigation}) => {
    console.log('ini navigation : ', navigation)
  }

  componentDidMount () {
    console.log('ini props: ', this.props)
  }

  _keyExtractor = (item, index) => index

  render() {

    return (
      <Container style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          horizontal={false}
          // numColumns='2'
          renderItem={({ item }) =>
            <CardMenu key={item}/>
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

const mapStateToProps = state => ({
  restaurant: state.restaurant
})

const connectedMenuCategory = connect(mapStateToProps)(MenuCategory)

export default connectedMenuCategory