import "./styles.css";
import NavBar from "./components/navbar";
import React, { Component } from "react";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //MOUNTING PHASE(1)
  constructor(props) {
    super(props);
    console.log("AppConstructor");
  }

  //MOUNTING PHASE(3)
  componentDidMount() {
    //Ajax Call
    console.log("App-Mounted");
  }

  //MOUNTING PHASE(3)
  componentWillUnmount() {
    //Ajax Call
    console.log("Counter-UNMounted");
  }

  handleIncrement = (counter) => {
    //console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    if (counters[index].value === 6) {
      counters[index].value = 0;
    }
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
    console.log("Event handler called", counterId);
  };

  //MOUNTING PHASE(2)
  render() {
    console.log("App-Rendered");
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
