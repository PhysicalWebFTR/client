import { combineReducers } from 'redux'

import peripherals from './fetchPeripheralsReducers'
import restaurant from './fetchRestaurantReducers'
import customer from './fetchCustomerReducers'

export default combineReducers({
  peripherals,
  restaurant,
  customer
})