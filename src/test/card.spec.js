import Card from "../Components/card/Card";
import { render, screen } from "@testing-library/react";
import { render as renderer, unmountComponentAtNode } from "react-dom";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

// please add your test cases here



describe("Daily News App Tests", () => {
  let element = "";

  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
  });

  afterEach(() => {
    unmountComponentAtNode(element);
    element.remove();
    element = null;
  });

  // Testcase1
  test("Should Card Have Rendering", () => {
    render(<Card />);
  });

  // Testcase2
  test("Should have class card in card component", () => {
    render(<Card />);
    expect(screen.getByTestId("cardTestId")).toHaveClass("card");
  });

  // Testcase3
  test("Should have class card-text in card component", () => {
    render(<Card />);
    expect(screen.getByTestId("cardTextId")).toHaveClass("card-text");
  });

  // Testcase4
  test("Should have class card-title in card component", () => {
    render(<Card />);
    expect(screen.getByTestId("cardTitleId")).toHaveClass("card-title");
  });

  // Testcase5
  test("Should have img tag in card Component", () => {
    renderer(<Card />, element);
    const count = element.getElementsByTagName("img").length;
    expect(count).toBeGreaterThanOrEqual(1);
  });
});
