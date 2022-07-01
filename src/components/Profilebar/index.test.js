import { render, screen, cleanup } from "@testing-library/react";
import Profilebar from "./index";

const data = {
  name: "Username",
  avatarImg:
    "https://media.istockphoto.com/photos/businessman-icon-on-white-background-picture-id464559136?k=20&m=464559136&s=612x612&w=0&h=wE-0fbNY3nHWJ2VCwE78P2D5aLTNEF7r86YXXYitMCU=",
};

const testRender = () =>
  render(
    <>
      <Profilebar name={data.name} avatarImg={data.avatarImg} />
    </>
  );

describe("Render Profilebar Component", () => {
  beforeEach(testRender);
  afterEach(cleanup);

  it("Component Rendered Successfully", () => {
    const name = screen.getByText(data.name);

    expect(name).toBeInTheDocument();
  });
});
