import {
  CHANGE_STATUS_READY,
  FETCH_OWNER
} from '../actionTypes'

export function changeStatusAction (item, menuList) {
  let index = menuList.findIndex(list => {
    return list.menuId._id === item.menuId._id
  })
  menuList[index].isReady = !item.isReady
  console.log('ini menu', menuList)
  return {
    type: CHANGE_STATUS_READY,
    payload: menuList
  }
}

export function fetchOwner (payload) {
  return {
    type: FETCH_OWNER,
    payload
  }
}