import React from "react";

const higherOrderComponent = (OriginalComponent: any) => {
  function NewComponent() {
    return <OriginalComponent />;
  }
  return NewComponent;
};
export default higherOrderComponent;
