import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentwillunmount() {
    console.log("hhhhhhhh");
  }
  render() {
    console.log("counters-Rendered");
    //destructing Arguments
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            {" "}
            <h4>{"gamed"}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
