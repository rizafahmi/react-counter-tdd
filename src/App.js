import React, { Component } from 'react'

import Counter from './components/Counter.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render () {
    return (
      <div>
        <h1>React Counter</h1>
        <Counter />
        <button> + </button>
        <button> - </button>
      </div>
    )
  }
}

export default App
