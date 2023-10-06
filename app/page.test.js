import Home from "./page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Display title on page", () => {
  it("Display started title on the page", () => {
    render(<Home />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
