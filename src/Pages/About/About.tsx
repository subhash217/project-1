import React, { useState } from "react";

const About = () => {
  const [state, setState] = useState({
    count: 0,
    list: ["AUS", "IND", "ENG", "NZ"],
  });
  function handleChange(e: any) {
    console.log(e.target);
  }
  const { count } = state;
  const listItem = state.list.map((value, i) => {
    return <li key={i}>{value}</li>;
  });
  return (
    <>
      <h2>About Page for Counter</h2>
      <p>{count}</p>
      <ul>{listItem}</ul>
      <button onClick={handleChange}>click</button>
    </>
  );
};

export default About;
