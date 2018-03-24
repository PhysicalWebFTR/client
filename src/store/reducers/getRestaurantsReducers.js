import {
  GET_RESTAURANTS_LOADING,
  GET_RESTAURANTS,
  GET_RESTAURANTS_RESET
} from '../actionTypes'

const initialState = {
  is_scanning: false,
  peripherals: [],
  connected_peripheralId: ''
}

export default function getRestaurantsReducer (state = {...initialState}, action) {
  switch (action.type) {
    case GET_RESTAURANTS_LOADING:
      return ({
        ...state,
        is_scanning: action.payload
      })
    case GET_RESTAURANTS:
      return ({
        ...state,
        peripherals: action.payload
      })
    case GET_RESTAURANTS_RESET:
      return ({
        ...state,
        peripherals: [],
        connected_peripheralId: ''
      })
    default:
      return state
  }
}