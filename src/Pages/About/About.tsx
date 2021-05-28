import React from "react";

export default class About extends React.Component {
  state = { count: 0, list: [1, 2, 3, 4, 5, 6, 7, 8, 9] };
  render() {
    const { count } = this.state;
    const listItem = this.state.list.map((x, i) => {
      return <Comp1 value={x} index={i} />;
    });
    return (
      <>
        <h2>About Page for Counter</h2>
        <p>{count}</p>
        <ul>{listItem}</ul>
        <input type="file" />
      </>
    );
  }
}

function Comp1({ value, index }: any) {
  console.log(value, index);
  return <li key={index}>{value}</li>;
}
