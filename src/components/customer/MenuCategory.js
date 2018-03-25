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
        data: [ 
          { 
            id: 'DnsPw5l1kDxHv2ad4esr',
            name: 'Christmas Pie',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/0ec4c984bff82516b657ed62a5f07b56/5B3916E1/t51.2885-15/s640x640/sh0.08/e35/25013783_311713692651669_4180162197407662080_n.jpg',
            description: 'Ginger cookie gluten free served with happiness',
            price: 25000,
            category: 'DESSERT'
          }, { 
            id: 'Gil5kz3QHPDrk8Uo8KBc',
            name: 'Indomie Vegie',
            photoUrl: 'https://scontent-sit4-1.cdninitemstagram.com/vp/7414e219679c494efbbc970abdf13df2/5B33EA0B/t51.2885-15/s640x640/sh0.08/e35/23596447_2016755885267741_964127154730172416_n.jpg',
            description: undefined,
            price: 16000,
            category: 'FOOD' 
          }, { 
            id: 'VARGqOPr2DbriDVIOudz',
            name: 'Rainbow Sandwich',
            photoUrl: 'https://media.travelingyuk.com/wp-content/uploads/2017/12/Roti-bakar-pelangi.jpg',
            description: undefined,
            price: 18000,
            category: 'FOOD' 
          }, { 
            id: 'YNUfOOdujhmvw9dYefDf',
            name: 'Indomie Carbonara',
            photoUrl: 'https://scontent-ort2-1.cdninstagram.com/vp/adc6a30cca4002d09b5ec77df307e958/5B307939/t51.2885-15/e35/28435350_226264234589282_9035320170859462656_n.jpg?se=8&ig_cache_key=MTczNTU3MzY1MjYwNTc0ODE0OA%3D%3D.2',
            description: undefined,
            price: 18000,
            category: 'FOOD' 
          }, { 
            id: 'Zxc0K0jhEFg6Wmw6HaIG',
            name: 'Mojitos Punch (3)',
            photoUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F79%2F61%2F22%2F7961222ddabcdce766f5e4a0a9ace0ec.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F508695720382353558%2F&docid=8pF0bb1FpS6flM&tbnid=zbGnUx9mF5NjFM%3A&vet=10ahUKEwio5IfJv4HaAhULpo8KHTX9AsAQMwjPASgAMAA..i&w=1000&h=1000&hl=en&bih=711&biw=1421&q=beverages%20drinks&ved=0ahUKEwio5IfJv4HaAhULpo8KHTX9AsAQMwjPASgAMAA&iact=mrc&uact=8',
            description: undefined,
            price: 48000,
            category: 'BEVERAGE' 
          }, { 
            id: 'dEFToGtROvaOKGUSiDAu',
            name: 'Berry smoothies',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/b18db76a8b5980cba5c2c38138c09813/5B3B8799/t51.2885-15/s640x640/sh0.08/e35/25006666_1619981271377985_4249482174996152320_n.jpg',
            description: 'Blended strawberry and cherry juice with raspberry',
            price: 20000,
            category: 'BEVERAGE' 
          }, { 
            id: 'hcoIWp2sBXTKgKy2HJzD',
            name: 'Indomie Ayam Bawang',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/8d379c1d32953959301e1e730a9197af/5B2F3F49/t51.2885-15/s640x640/sh0.08/e35/25037160_2012966792052775_7909916294084820992_n.jpg',
            description: undefined,
            price: 19000,
            category: 'FOOD' 
          }, { 
            id: 'ltqPtN4qGpRQ51huBJ5o',
            name: 'Orange squash',
            photoUrl: 'https://bluechairbayrum.com/wp-content/uploads/2017/03/Vanilla_Recipe_Web_MeltedPopsicle.png',
            description: undefined,
            price: 12000,
            category: 'BEVERAGE' 
          }, { 
            id: 'myeVsHn1KNWFLqH4k7Fj',
            name: 'Mango Sticky Rice',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/04264fe83cce0363b76139f5c6d4ac8e/5B39C412/t51.2885-15/s640x640/sh0.08/e35/26427919_153165552067240_2784472811765235712_n.jpg',
            description: 'Dessert made with glutinous rice, fresh mango and coconut milk',
            price: 30000,
            category: 'DESSERT' 
          },{ 
            id: 'mzrijThaTXuV5fmmK2G9',
            name: 'ice cream matcha',
            photoUrl: 'https://instagram.fcgk3-1.fna.fbcdn.net/vp/c89086b6aa5264436538453ae656fa1f/5B740B5E/t51.2885-15/s640x640/sh0.08/e35/23668217_163217450944629_6862364652374851584_n.jpg',
            description: 'Macha ice cream with chocoballs and mochis',
            price: 25000,
            category: 'DESSERT' },
          { 
            id: 'uy0vmuwuTc9mMs8cwHGQ',
            name: 'Sushimie',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/992acc58430e2b503e28edf55a784add/5B329993/t51.2885-15/sh0.08/e35/p640x640/18094955_638853999640042_8373354831670149120_n.jpg',
            description: 'Sushi mie with salmon',
            price: 20000,
            category: 'FOOD' 
          },{ 
            id: 'xIKCNEDXIkc1S2bwzsux',
            name: 'Ice Cream Cone',
            photoUrl: 'https://scontent-sit4-1.cdninstagram.com/vp/7ff773d4fbbd975a041f5d53e006b362/5B31A626/t51.2885-15/sh0.08/e35/p640x640/26344276_433014640447158_7958391601384914944_n.jpg',
            description: 'Super creamy ice cream with macha',
            price: '20000',
            category: 'DESSERT' 
          }
        ] 
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
          renderItem={({ item }) => {
            console.log('ii tobi', this.props.category)
            if (this.props.category === item.category) {
              return <CardMenu foodItem={item}/>
            }
          }}
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
  restaurant: state.restaurant,
  customer: state.customer
})

const connectedMenuCategory = connect(mapStateToProps)(MenuCategory)

export default connectedMenuCategory