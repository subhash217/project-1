import React, { Component } from "react";
import { connect } from "react-redux";

type counter = {
  heading: string;
};

type localState = {
  count: number;
  isChecked: any;
};

class CounterClass extends Component<counter, localState> {
  constructor(props: counter) {
    // ️⚡️ does not compile in strict mode
    super(props);
    this.state = {
      count: 0,
      isChecked: true,
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec() {
    this.setState((state) => ({ count: state.count - 1 }));
  }
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("Did Mount");
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log(this.props.heading, this.state.count);
    console.log(`Should I Update! ${nextProps.heading} ${nextState.count}`);
    if (this.state.count !== nextState.count) {
      return true;
    } else {
      return false;
    }
  }
  componentDidUpdate(prevProps: any, prevState: any) {
    console.log(
      `component updated with ${prevProps.heading} ${prevState.count}`
    );
  }
  render() {
    console.log("counter class component");
    return (
      <div>
        <h3>{this.props.heading}</h3>
        <p>counter:{this.state.count}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec.bind(this)}>-</button>
        <input type="checkbox" value="true" />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    counter: state.value,
  };
};
export default connect(mapStateToProps)(CounterClass);
