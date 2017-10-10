import { LOCATION_CHANGE, routerReducer } from '../reducerImmutable'
import { fromJS } from 'immutable'

describe('routerReducerImmutable', () => {
  const state = fromJS({
    location: {
      pathname: '/foo',
      action: 'POP'
    }
  })

  it('updates the path', () => {
    expect(routerReducer(state, {
      type: LOCATION_CHANGE,
      payload: {
        path: '/bar',
        action: 'PUSH'
      }
    })).toEqual(fromJS({
      location: {
        path: '/bar',
        action: 'PUSH'
      }
    }))
  })

  it('works with initialState', () => {
    expect(routerReducer(undefined, {
      type: LOCATION_CHANGE,
      payload: {
        path: '/bar',
        action: 'PUSH'
      }
    })).toEqual(fromJS({
      location: {
        path: '/bar',
        action: 'PUSH'
      }
    }))
  })


  it('respects replace', () => {
    expect(routerReducer(state, {
      type: LOCATION_CHANGE,
      payload: {
        path: '/bar',
        action: 'REPLACE'
      }
    })).toEqual(fromJS({
      location: {
        path: '/bar',
        action: 'REPLACE'
      }
    }))
  })
})
