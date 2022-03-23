import Header from "../Components/header/Header";
import { render, screen } from "@testing-library/react";
import {
  render as renderer,
  unmountComponentAtNode,
  ReactDOM,
} from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";



describe("Header Component TestCases", () => {
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
  test("Should Header Have Rendering", () => {
    renderer(
      <Router>
        <Header />
      </Router>,
      element
    );
  });

  // Testcase2
  test("Should have nav in Header component", () => {
    renderer(
      <Router>
        <Header />
      </Router>,
      element
    );
    const count = element.getElementsByTagName("nav").length;
    expect(count).toBe(1);
  });

  //TestCase3
  test("Should have class navbar in Header Component", () => {
    renderer(
      <Router>
        <Header />
      </Router>,
      element
    );
    expect(screen.getByTestId("navidC")).toHaveClass("navbar");
  });

  // Testcase4
  test("Should have atleast one link in Header component", () => {
    renderer(
      <Router>
        <Header />
      </Router>,
      element
    );
    const count = element.getElementsByTagName("a").length;
    expect(count).toBeGreaterThanOrEqual(1);
  });
  // Testcase5
  test("Should have search text field in Header Component", () => {
    renderer(
      <Router>
        <Header />
      </Router>,
      element
    );
    const count = element.getElementsByTagName("input").length;
    expect(count).toBe(1);
  });

  // Testcase6
  test("Should have search text on button of Header Component", () => {
    renderer(
      <Router>
        <Header />
      </Router>,
      element
    );
    expect(screen.getByTestId("searchId")).toHaveTextContent("Search");
  });
});
