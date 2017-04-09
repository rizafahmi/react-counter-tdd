import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'

it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app).toBeDefined()
})
