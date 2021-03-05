import React, { Component } from "react";

interface error {
  hasError: boolean;
}
export default class ErrorBoundary extends Component<{}, error> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(err: any) {
    return { hasError: true };
  }
  componentDidCatch(err: any, errorinfo: any) {
    console.log(err, errorinfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went worng</h1>;
    }
    return <>{this.props.children}</>;
  }
}
