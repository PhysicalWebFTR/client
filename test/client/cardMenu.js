import CardMenu from '../../src/components/customer/CardMenu'
import React from 'react';
import {Card, CardItem} from 'native-base'
import { Image } from 'react-native'

describe('Card Menu Testing', () => {
  it('should have card and card item', () => {
    const wrapper = shallow (
      <CardMenu/>
    )
    console.log(wrapper)
    expect(wrapper.containsAnyMatchingElements([
      <Image/>,
      <Card/>
    ])).toBeTruthy()
  })
})


{/* <Card>
  <CardItem cardBody>
    <Image source={{ uri: imageUrl }}
      style={styles.image} />
  </CardItem>
  <CardItem>
    <Left>
      <Body>
        <Text style={styles.textName}>Menu Name</Text>
        <Text note>Rp. xxx.xxx</Text>
        <Text note style={styles.textDescription}>Description lorem ipsum sir doler amit ...</Text>
      </Body>
    </Left>
  </CardItem>
  <CardItem>
    <Button block success style={styles.button}>
      <Text>Add</Text>
    </Button>
  </CardItem>
</Card> */}