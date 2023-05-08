import React from "react";
import Alert from "./Alert";
import ButtonCounter from "./ButtonCounter";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      alert: null,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      alert: null,
    });
  };

  decrement = () => {
    if (this.state.count <= 0) {
      this.setState({
        alert: <Alert title="Angka tidak boleh negatif" type="warning" />,
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
            <ButtonCounter title="-" type="danger" cb={this.decrement} />
            <span className="text-dark mx-2 align-self-center">
              {this.state.count}
            </span>
            <ButtonCounter title="+" type="primary" cb={this.increment} />
          </div>
          <span className="mt-5">{this.state.alert}</span>
        </div>
      </>
    );
  }
}
