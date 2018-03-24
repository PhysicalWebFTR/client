import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListMenuOwner from '../.././src/views/owner/ListMenuOwner'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Button, Icon } from 'native-base';


export default describe('List Menu Owner', () => {
  it('should have Container, List, ListItem', () => {
    const wrapper = shallow(
      <ListMenuOwner/>
    )
    expect(wrapper.containsAnyMatchingElements([
      <Container/>,
      <List/>,
      <ListItem/>
    ])).toBe(true)
  })
  // it('Test click list item' ,() => {
  //   const mockCallBack = jest.fn();

  //   const listItemClick = shallow(
  //     <ListItem
  //             onPress={() => console.log('hai')} >
  //     </ListItem>
  //   )

  //   listItemClick.find('ListItem').simulate('press')
  //   console.log(listItemClick.find('ListItem'))
  //   expect(mockCallBack.mock.calls.length).toEqual(0);
  // })
})