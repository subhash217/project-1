import React from "react";
import Dashboard from "./Dashboard";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Render Dashboard", () => {
  test("without crash", () => {
    render(<Dashboard />);
    const link = screen.getByLabelText("home page");

    fireEvent.click(link);
  });
});
