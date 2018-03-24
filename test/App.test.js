import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;

import ListMenuCustomerTest from './client/listMenu'
import ListMenuOwnerTest from './owner/listMenu'
import cardMenuTest from './client/cardMenu'

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

// describe('<InputForm />', () => {
//   it('should have password validation', () => {
//     const wrapper = mount(
//       <Provider store={store}>
//         <InputForm />
//       </Provider>
//     )
//     expect(wrapper.containsAnyMatchingElements([
//       <CharacterValidation/>,
//       <UppercaseValidation/>,
//       <LowercaseValidation/>,
//       <NumberValidation/>,
//       <SpecialCharacterValidation/>
//     ])).toBe(true)
//   })
// })