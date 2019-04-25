import React from 'react'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  modifyAddCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  modifySubtractCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  } 

  render() {
    return (
      <div>
        <button onClick={this.modifyAddCounter}>Add</button>
        <button onClick={this.modifySubtractCounter}>Subtract</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}