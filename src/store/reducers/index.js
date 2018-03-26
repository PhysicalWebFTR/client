import { combineReducers } from 'redux'

import peripherals from './fetchPeripheralsReducers'
import restaurant from './fetchRestaurantReducers'
import customer from './fetchCustomerReducers'
import owner from './fetchOwnerReducers'

export default combineReducers({
  peripherals,
  restaurant,
  customer,
  owner
})