import { DRAWER_SIDEBAR_OPEN, DRAWER_SIDEBAR_CLOSE } from '../constants/appSidebarConstants'

export function appSidebarOpen() {
  console.log('drawerSidebarOpen');
  return { type: DRAWER_SIDEBAR_OPEN }
}

export function appSidebarClose() {
  console.log('drawerSidebarClose');
  return { type: DRAWER_SIDEBAR_CLOSE }
}
