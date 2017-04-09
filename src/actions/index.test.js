import { decrementAction, incrementAction } from './index'

describe('Action Testing', () => {
  it('should create INCREMENT action', () => {
    expect(incrementAction()).toEqual({
      type: 'INCREMENT'
    })
  })
  it('should create DECREMENT action', () => {
    expect(decrementAction()).toEqual({
      type: 'DECREMENT'
    })
  })
})
