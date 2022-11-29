import { render } from "@testing-library/react";
import Home from "../../pages";

describe("Home page", () => {
  it("renders correctly", () => {
    const { getByAltText, getByText } = render(<Home />);

    expect(getByText("Hello there!")).toBeInTheDocument();
    expect(getByAltText("Home Image")).toBeInTheDocument();
  });
});
