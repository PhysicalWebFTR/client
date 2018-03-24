import { 
  FETCH_TABLE_NUM,
  FETCH_CUST_REST_ID
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