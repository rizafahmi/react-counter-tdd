import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from './App'

it('renders without crashing', () => {
  const app = shallow(<App />)
  expect(app).toBeDefined()
})

describe('Renders <App /> components', () => {
  let app
  beforeEach(() => {
    app = shallow(<App />)
  })
  it('should render title component', () => {
    const actual = app.find('h1').text()
    expect(actual).toEqual('React Counter')
  })
  it('should render counter component', () => {
    const actual = app.find('Counter')
    expect(actual.length).toEqual(1)
  })
  it('should render increment button', () => {

  })
  it('should render decrement button')
})
