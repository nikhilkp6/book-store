import { render, screen } from "@testing-library/react";

import AddBook from "./components/AddBook";
test("test on label", () => {
  const { getByLabelText } = render(<AddBook />);
  //console.log(components);
  const childElement = getByLabelText("Name");
  expect(childElement).toBeInTheDocument();
});
