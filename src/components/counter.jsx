import React, { Component } from "react";

class Counter extends Component {
  //UPDATE PHASE(2)
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    ///DOING SOMETHING IF VALUE IS CHANGED
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  person = {
    name: "Ahmed",
    age: 28
  };

  render() {
    console.log("Counter-Rendered");
    //console.log("props", this.props);
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
}

export default Counter;
