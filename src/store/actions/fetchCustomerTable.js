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

export function addItemAction (item, menuList, isMinus) {
  let index = menuList.findIndex(menu => {
    return menu.id === item.id
  })

  if (isMinus) {
    menuList[index].quantity--
  } else {
    if (index == -1) {
      item.quantity = 1
      menuList.push(item)
    } else {
      menuList[index].quantity++
    }
  }
  return {
    type: ADD_ITEM,
    payload: menuList
  }
}

export function removeItemAction (item, menuList) {
  let index = menuList.findIndex(menu => {
    return menu.id === item.id
  })

  menuList.splice(index, 1)

  return {
    type: ADD_ITEM,
    payload: menuList
  }
}