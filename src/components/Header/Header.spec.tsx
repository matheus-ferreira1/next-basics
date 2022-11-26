import { render, screen } from "@testing-library/react";
import Header from "./";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("Header component", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText } = render(<Header />);

    // screen.logTestingPlaygroundURL();

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Posts")).toBeInTheDocument();
    expect(getByAltText("DevNews")).toBeInTheDocument();
  });

  it("adds ACTIVE class when the currently link is active", () => {
    const { getByText } = render(
      <a href="/" className="active">
        Home
      </a>
    );

    expect(getByText("Home")).toHaveClass("active");
  });
});
