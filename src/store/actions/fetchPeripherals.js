import {
  FETCH_PERIPHERALS_LOADING,
  FETCH_PERIPHERALS,
  FETCH_PERIPHERALS_RESET,
  FETCH_PERIPHERALS_ID,
  FETCH_DETAIL_PERIPHERAL
} from '../actionTypes'

export function fetchPeripheralsLoading (payload) {
  return {
    type: FETCH_PERIPHERALS_LOADING,
    payload
  }
}

export function fetchPeripherals (payload) {
  return {
    type: FETCH_PERIPHERALS,
    payload
  }
}

export function fetchPeripheralsReset () {
  return {
    type: FETCH_PERIPHERALS_RESET
  }
}

export function fetchPeripheralId (id) {
  return {
    type: FETCH_PERIPHERALS_ID,
    payload: id
  }
}

export function fetchPeripheralDetail (payload) {
  return {
    type: FETCH_DETAIL_PERIPHERAL,
    payload
  }
}