import React from "react";
import Alert from "./Alert";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      alert: null,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    if (this.state.count <= 0) {
      this.setState({
        alert: <Alert />,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="d-flex mt-4 mb-3">
            <button className="btn btn-primary" onClick={this.decrement}>
              -
            </button>
            <span className="text-dark mx-2 align-self-center">
              {this.state.count}
            </span>
            <button
              className="btn btn-primary"
              onClick={this.increment.bind(this)}
            >
              +
            </button>
          </div>
          <span className="mt-5">{this.state.alert}</span>
        </div>
      </>
    );
  }
}
