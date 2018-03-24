import {
  FETCH_RESTAURANT
} from '../actionTypes'

const initialState = {
  id: '',
  name: '',
  menuList: [],
  tableList: []
}

export default function fetchRestaurantReducers (state={...initialState}, action) {
  switch (action.type) {
    case FETCH_RESTAURANT:
      return action.payload
    default:
      return state
  }
}