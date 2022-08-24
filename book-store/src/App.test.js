import { Experimental_CssVarsProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import About from "./components/About";
import AddBook from "./components/AddBook";

test("test on about", () => {
  render(<About />);
  const LinkElement = screen.getByText(/this is about/i);
  expect(LinkElement).toBeInTheDocument();
});

/*
test("test on label", () => {
  const { getByLabelText } = render(<AddBook />);
  //console.log(components);
  const childElement = getByLabelText("Name");
  expect(childElement).toBeInTheDocument();
});
*/
