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
  console.log('fetch restaurant reducer', action)
  switch (action.type) {
    case FETCH_RESTAURANT:
      return {
        id: action.payload.id,
        name: action.payload.name,
        menuList: action.payload.menu_list,
        tableList: action.payload.table_list,
      }
    default:
      return state
  }
}