import {
  FETCH_RESTAURANT
} from '../actionTypes'

export function fetchRestaurant (payload) {
  return {
    type: FETCH_RESTAURANT,
    payload
  }
}