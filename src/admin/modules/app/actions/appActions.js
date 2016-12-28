import { SET_APP_TITLE } from '../constants/appConstants'

export function setAppTitle(title) {
  console.log('drawerSidebarOpen');
  return { type: SET_APP_TITLE, title }
}
