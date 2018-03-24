import {
  FETCH_TABLE_NUM,
  FETCH_CUST_REST_ID
} from '../actionTypes'

const initialState = {
  idCustomer: String(Math.floor(Math.random()*80808)),
  idRestaurant: '',
  idTable: '',
  menuList: []
}

export default function fetchCustomerReducers (state = {...initialState}, action) {
  switch (action.type) {
    case FETCH_TABLE_NUM:
      return ({
        ...state,
        idTable: action.payload
      })
    case FETCH_CUST_REST_ID:
      return ({
        ...state,
        idRestaurant: action.payload
      })
    default:
      return state
  }
}