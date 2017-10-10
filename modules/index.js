export ConnectedRouter from './ConnectedRouter'
export { getLocation, createMatchSelector } from './selectors'
export { LOCATION_CHANGE, routerReducer } from './reducer'
export {
  CALL_HISTORY_METHOD,
  push, replace, go, goBack, goForward,
  routerActions
} from './actions'
export routerMiddleware from './middleware'

export { getLocation as getLocationImmutable, createMatchSelector as createMatchSelectorImmutable } from './selectorsImmutable'
export { routerReducer as routerReducerImmutable } from './reducerImmutable'
