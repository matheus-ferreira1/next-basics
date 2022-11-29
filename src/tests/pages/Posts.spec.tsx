import { render } from "@testing-library/react";
import Posts from "../../pages/posts";

const posts = [
  {
    id: "test-new-post",
    title: "Title for the new post",
    body: "This is the body of new post",
  },
];

describe("Posts page", () => {
  it("renders correctly", () => {
    const { getByText, debug } = render(<Posts posts={posts} />);

    debug();

    expect(getByText("Title for the new post")).toBeInTheDocument();
  });
});
