import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'

it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app).toBeDefined()
})

describe('Renders <App /> components', () => {
  it('should render title component', () => {
    const app = shallow(<App />)
    const actual = app.find('h1').text()
    expect(actual).toEqual('React Counter')
  })
  it('should render counter component')
  it('should render increment button')
  it('should render decrement button')
})
