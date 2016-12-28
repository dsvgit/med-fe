import { ROUTE } from '../constatnts';

export function createRouteAction (location) {
  return {
    type: ROUTE,
    payload: location
  };
}
