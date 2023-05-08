import React from "react";

export default class Alert extends React.Component {
  render() {
    return (
      <div className="alert alert-warning" role="alert">
        Angka tidak boleh negatif
      </div>
    );
  }
}
