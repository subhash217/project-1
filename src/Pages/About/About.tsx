import React, { useState } from "react";

const About = () => {
  const [state, setState] = useState({ count: 0, list: [] });
  function handleChange(e: any) {
    console.log(e.target);
  }
  const { count } = state;
  const listItem = state.list.map((x, i) => {
    return <Comp1 value={x} key={i} />;
  });
  return (
    <>
      <h2>About Page for Counter</h2>
      <p>{count}</p>
      <ol>{listItem}</ol>
      <button onClick={handleChange}>click</button>
    </>
  );
};

function Comp1({ value }: any) {
  return <li>{value}</li>;
}

export default About;
