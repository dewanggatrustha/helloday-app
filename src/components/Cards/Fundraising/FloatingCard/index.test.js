import { render, screen, cleanup } from "@testing-library/react";
import FloatingCard from "./index";

const data = {
  totalRaised: "Rp 15.000.000",
  maxRaised: "Rp 20.000.000",
  totalPeopleDonation: "15.9K donations",
};

const testRender = () =>
  render(
    <>
      <FloatingCard
        totalRaised={data.totalRaised}
        maxRaised={data.maxRaised}
        totalPeopleDonation={data.totalPeopleDonation}
      />
    </>
  );

describe("Render Emergency Card Component", () => {
  beforeEach(testRender);
  afterEach(cleanup);

  it("Component Rendered Successfully", () => {
    const totalRaised = screen.getByText(data.totalRaised);
    const maxRaised = screen.getByText(data.maxRaised);
    const totalPeopleDonation = screen.getByText(data.totalPeopleDonation);

    expect(totalRaised).toBeInTheDocument();
    expect(maxRaised).toBeInTheDocument();
    expect(totalPeopleDonation).toBeInTheDocument();
  });
});
