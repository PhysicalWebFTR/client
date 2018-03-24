import {
  GET_RESTAURANTS_LOADING,
  GET_RESTAURANTS,
  GET_RESTAURANTS_RESET
} from '../actionTypes'

export function fetchRestaurantsLoading (payload) {
  return {
    type: GET_RESTAURANTS_LOADING,
    payload
  }
}

export function fetchRestaurants (payload) {
  return {
    type: GET_RESTAURANTS,
    payload
  }
}

export function fetchRestaurantsReset () {
  return {
    type: GET_RESTAURANTS_RESET
  }
}