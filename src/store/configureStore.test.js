import { createStore } from 'redux'
import counterReducers from '../reducers'
import incrementAction from '../actions'

test('should handle increment counter', () => {
  const store = createStore(counterReducers)
  const action = incrementAction()
  store.dispatch(action)

  const actual = store.getState()
  expect(actual).toEqual(1)
})
