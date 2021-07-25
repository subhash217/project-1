import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
// import { render, shallow } from "enzyme";
import About from "./About";

describe("render About component", () => {
  // test("find dom", () => {
  //   const { getByText } = render(<About />);
  //   expect(getByText("About Page for Counter")).toBeInTheDocument();
  // });
  test("render without crash", () => {
    render(<About />);
    const button = screen.getByText("click");
    fireEvent.click(button);
  });
});
