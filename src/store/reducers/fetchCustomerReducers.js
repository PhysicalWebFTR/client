import {
  FETCH_TABLE_NUM,
  FETCH_CUST_REST_ID,
  ADD_ITEM,
  RESET_ORDER
} from '../actionTypes'

const initialState = {
  // idCustomer: String(Math.floor(Math.random()*80808)),
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
    case ADD_ITEM:
      return ({
        ...state,
        menuList: action.payload
      })
    case RESET_ORDER:
      return ({
        ...state,
        menuList: []
      })
    default:
      return state
  }
}