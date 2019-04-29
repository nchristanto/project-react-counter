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
      <div className="component">
        <button className="decrease" disabled={this.state.counter === 0} onClick={this.modifySubtractCounter}>&ndash;</button>
        <button onClick={this.modifyAddCounter}>+</button>
        <p>{this.state.counter}</p>
      </div>
    )
  }
}