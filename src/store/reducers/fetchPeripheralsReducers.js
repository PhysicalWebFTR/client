import {
  FETCH_PERIPHERALS_LOADING,
  FETCH_PERIPHERALS,
  FETCH_PERIPHERALS_RESET,
  FETCH_PERIPHERALS_ID,
  FETCH_DETAIL_PERIPHERAL
} from '../actionTypes'

const initialState = {
  is_scanning: false,
  peripherals: [],
  detailPeripheral: {

  }
}

export default function fetchPeripheralsReducers (state = {...initialState}, action) {
  switch (action.type) {
    case FETCH_PERIPHERALS_LOADING:
      return ({
        ...state,
        is_scanning: action.payload
      })
    case FETCH_PERIPHERALS:
      return ({
        ...state,
        peripherals: action.payload
      })
    case FETCH_PERIPHERALS_ID:
      return ({
        ...state,
        connected_peripheralId: action.payload
      })
    case FETCH_DETAIL_PERIPHERAL:
      return ({
        ...state,
        detailPeripheral: action.payload
      })
    case FETCH_PERIPHERALS_RESET:
      return ({
        ...state,
        peripherals: [],
        connected_peripheralId: '',
        detailPeripheral: {}
      })
    default:
      return state
  }
}