import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      counter: 0
    }
  },
  increment(){
    this.setState({counter: ++this.state.counter});
  },
  render() {
    return (
      <div>
        <div>Hello, React Router! {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
})
