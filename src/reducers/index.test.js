import incrementAction from '../actions'
import counterReducers from './index.js'

test('should increment 1 if counterReducers with action INCREMENT', () => {
  const initalState = 0

  const action = incrementAction()
  const newState = counterReducers(initalState, action)

  expect(newState).toEqual(1)
})
