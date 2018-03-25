import { 
  FETCH_TABLE_NUM,
  FETCH_CUST_REST_ID,
  ADD_ITEM
} from '../actionTypes'

export function fetchCustomerTable (num) {
  return {
    type: FETCH_TABLE_NUM,
    payload: num
  }
}

export function fetchCustomerRestaurantId (restId) {
  return {
    type: FETCH_CUST_REST_ID,
    payload: restId
  }
}

export function addItemAction (item) {
  console.log('item di action', item)
  return {
    type: ADD_ITEM,
    payload: item
  }
}