import React, {Component} from 'react'

// export default React.createClass({
//   getInitialState(){
//     return {counter: 0};
//   },
//   increment(){
//     this.setState({counter: ++this.state.counter});
//   },
//   render() {
//     return (
//       <div>
//         <div>Hello, React Router! {this.state.counter}</div>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// });

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }
  increment(){
    console.log(this);
    this.setState({counter: ++this.state.counter});
  }
  render(){
    return (
      <div>
        <div>Hello, React Route! {this.state.counter}</div>
        <button onClick={this.increment.bind(this)}>Increment</button>
      </div>
    );
  }
}

export default App;