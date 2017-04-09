import React, { Component } from 'react'

import Counter from './components/Counter.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  incrementCounter () {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    return (
      <div>
        <h1>React Counter</h1>
        <Counter />
        <button onClick={() => this.incrementCounter()}> + </button>
        <button> - </button>
      </div>
    )
  }
}

export default App
