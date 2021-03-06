import { fromJS } from 'immutable';
/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
export var LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

var initialState = fromJS({
  location: null
});

/**
 * This reducer will update the state with the most recent location history
 * has transitioned to. This may not be in sync with the router, particularly
 * if you have asynchronously-loaded routes, so reading from and relying on
 * this state is discouraged.
 */
export function routerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  if (type === LOCATION_CHANGE) {
    return state.set('location', fromJS(payload));
  }

  return state;
}