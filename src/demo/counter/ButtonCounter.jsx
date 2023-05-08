import React from "react";

export default class ButtonCounter extends React.Component {
  do = () => {
    this.props.cb();
  };

  render() {
    return (
      <button
        type="button"
        class={`btn btn-${this.props.type}`}
        onClick={this.do}
      >
        {this.props.title}
      </button>
    );
  }
}
