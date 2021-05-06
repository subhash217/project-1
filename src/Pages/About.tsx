import React from "react";

export class About extends React.Component {
  state = { count: 0 };
  render() {
    const { count } = this.state;
    return (
      <>
        <h2>About Page for Counter</h2>
        <p>{count}</p>
      </>
    );
  }
}
