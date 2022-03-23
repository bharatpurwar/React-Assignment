import Footer from "../Components/footer/Footer";
import { render, screen } from "@testing-library/react";
import { render as renderer, unmountComponentAtNode } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

// please add your test cases here


//TestSuite 1
describe("Footer Component TestCases", () => {
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
    render(
      <Router>
        <Footer />
      </Router>
    );
  });

  // Testcase2
  test("Should render footer component with News Hunt Text", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText("www.newsOnline.com")).toBeInTheDocument();
  });

  // Testcase3
  test("Should render footer component with Copyright", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByText(/Nih@rik@/)).toBeInTheDocument();
  });

  // Testcase4
  test("Should have input text field in Footer Component", () => {
    renderer(
      <Router>
        <Footer />
      </Router>,
      element
    );
    const count = element.getElementsByTagName("input").length;
    expect(count).toBe(1);
  });

  // Testcase5
  test("Should have subscribe text on button of Footer Component", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(screen.getByTestId("subscribe")).toHaveTextContent("Subscribe");
  });
});
