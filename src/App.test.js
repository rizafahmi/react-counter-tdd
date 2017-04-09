import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'

it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app).toBeDefined()
})

describe('Renders <App /> components', () => {
  it('should render title component')
  it('should render counter component')
  it('should render increment button')
  it('should render decrement button')
})
