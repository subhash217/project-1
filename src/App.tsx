import React from "react";
import "./App.scss";
import { Route, Link, Switch, NavLink, Redirect } from "react-router-dom";
import { About, Login, Dashboard } from "./Pages";
// import { TextField } from "office-ui-fabric-react/lib/TextField";
import CounterFunction from "./components/counterFunction";
import CounterClass from "./components/counterClass";
// import { Enhanced } from "./compoone";
import Renderprops from "./renderprops";
import NavBar from "./components/NavBar";
import ReactFroms from "./forms/ReactFroms";
import FormikForm from "./forms/FormikForm";
import UserList from "./components/userList";

export let myContext = React.createContext("subash");

const Root: React.FunctionComponent = () => {
  const [count, setCount] = React.useState(0);
  console.log(myContext);
  function foo() {
    return "bar";
  }
  const memoizedcallback = React.useCallback(() => "bar", []);
  const memoizedValue = React.useMemo(() => "bar", []);
  console.log(memoizedValue, memoizedcallback);
  return (
    <React.Fragment>
      <NavBar />
      <ul>
        <li>
          <NavLink
            activeStyle={{ color: "red", textDecoration: "none" }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            activeStyle={{ color: "red", textDecoration: "none" }}
            to={{ pathname: "/dashboard", search: "?id=123", hash: "#str" }}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            activeStyle={{ color: "red", textDecoration: "none" }}
          >
            Login
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="*" render={() => <Redirect to="/login" />} />
      </Switch>
      {/* <UserList /> */}
      {/* <ReactFroms />
      <FormikForm /> */}
      {/* <Enhanced /> */}
      <header className="navBar">
        <div>Microsoft</div>
      </header>
      {/* <div id="container">
        <div id="one">One</div>
        <div id="two">Two</div>
        <div id="three">Three</div>
        <div id="four">Four</div>
        <div id="five">Five</div>
        <div id="six">Six</div>
      </div> */}
      {/* <myContext.Provider value="new value">
        <CounterFunction heading="Counter With Function Component" />
        <CounterClass heading="Counter With Class Component" />
      </myContext.Provider>
      <Renderprops title={(msg: string) => <div>{msg}</div>} /> */}
    </React.Fragment>
  );
};

export default Root;
