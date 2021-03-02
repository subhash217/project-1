import React, { Component } from "react";
import higherOrderComponent from "./HOC";
class Compoone extends Component {
  render() {
    console.log(this.props);
    return <div>New component</div>;
  }
}

export const Enhanced = higherOrderComponent(Compoone);
