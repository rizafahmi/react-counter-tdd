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
  it('should render increment and decrement button', () => {
    const actual = app.find('button')
    expect(actual.length).toEqual(2)
    const incButton = app.find('button').first()
    const decButton = app.find('button').last()
    expect(incButton.text().trim()).toEqual('+')
    expect(decButton.text().trim()).toEqual('-')
  })
})
