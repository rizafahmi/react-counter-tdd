import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'

import { App } from '../App.js'
// import Counter from './Counter.js'
import store from '../store/configureStore.js'

describe('Test render <Counter />', () => {
  test('should render as h2', () => {
    const app = shallow(<App />)
    app.find('button').first().simulate('click')
    // const state = app.state('counter')
    const wrapper = mount(<Provider store={store}><Counter /></Provider>)
    const counter = wrapper.find('h2')
    expect(counter).toBeDefined()
    // expect(counter.text()).toEqual(state.toString())
    const countProp = wrapper.props().store.getState()
    expect(countProp).toEqual(0)
  })
})
