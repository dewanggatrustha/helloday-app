import { render, screen, cleanup } from "@testing-library/react";
import MiniDonationCard from "./index";

const data = {
  // image:
  //   "https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZHJhaXNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  alt: "tes",
  name: "User",
  nominal: 1200000,
};

const testRender = () =>
  render(
    <>
      <MiniDonationCard
        // image={data.image}
        // alt={data.alt}
        name={data.name}
        nominal={data.nominal}
      />
    </>
  );

describe("Render Emergency Card Component", () => {
  beforeEach(testRender);
  afterEach(cleanup);

  it("Component Rendered Successfully", () => {
    // const image = screen.getAllByAltText(data.image);
    const name = screen.getByText(data.name);
    const nominal = screen.getByText(data.nominal);

    // expect(image).toBeTruthy();
    expect(nominal).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});
