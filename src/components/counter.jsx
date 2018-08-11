import React, { Component } from 'react';
class Counter extends Component{

  //application states maintained here
  state = {
    value: this.props.counter.value,
    number1: 0
  };

  //styling of components done here
  //use of camelcase
  styles = {
    fontSize:10,
    fontWeight: "bold"
  };
  image = {
      fontSize:10,
      marginLeft: "450px",
      height: "300px",
  };

  // constructor(){
  //     super();
  //     //state binding
  //     this.handleIncrement = this.handleIncrement.bind(this);
  // }

  //main component render method
  render(){
    return (
      <div>
          {this.props.children}
          #Counter{this.props.counter.id}

          {/* get value of "value" state */}
          <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>

          {/* event handling */}
          {/*<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button> cannot handle parameter*/}

          {/* pass paramters to event handler */}
          <button onClick={ () => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm"> Increment </button>
          <button onClick={ () => this.handleDecrement({id: 1})} className="btn btn-secondary btn-sm m-2"> Decrement </button>
          <button onClick={ () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete </button>
          <hr/>
      </div>
    );
  }
    //binded method via constructor
  // handleIncrement(){
  //     // console.log(this.state.value); this.state.value is not accessible without binding
  //     console.log("Hey React Master",this.state.value);
  // }
  // arrow function inheriting "this" and this function cannot take parameters
  // handleIncrement = () => {
  //      this.setState({value: this.state.value + 1});
  // };
  handleIncrement = product => {
      this.setState({value: this.state.value + 1});
  };
  handleDecrement = product => {
      this.setState({value: this.state.value - 1});
  };

  //apply class to span based on value state i.e 0 or not
  getBadgeClasses (){
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  //return string "zero" on "value" state as 0
  formatCount(){
    const {value} = this.state;
    return value === 0 ? "Zero" : value;
  }
}
export default Counter;