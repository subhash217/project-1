import React, { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
// import myContext from '../App';
interface Counter {
  heading: string;
}
function CounterFunction({ heading }: Counter) {
  const counter = useSelector((state: any) => state.value);
  const dispatch = useDispatch();
  // const context = React.useContext<any>(myContext)
  console.log("counter function component");
  return (
    <div>
      <h3>{heading}</h3>
      <p>counter:{counter}</p>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
    </div>
  );
}

export default React.memo(CounterFunction);
