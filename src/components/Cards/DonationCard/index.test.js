import { render, screen, cleanup } from "@testing-library/react";
import DonationCard from "./index";

const data = {
  name: "User",
  imgsrc:
    "https://drive.google.com/uc?export=view&id=1ck5U8KAcsEQiREpPKfPBjifCG0n_lcOd",
  alt: "tes",
  nominal: 1200000,
  time: 12,
  message: "Semoga bisa membantu",
};

const testRender = () =>
  render(
    <>
      <DonationCard
        name={data.name}
        imgsrc={data.imgsrc}
        alt={data.name}
        nominal={data.nominal}
        time={data.time}
        message={data.message}
      />
    </>
  );

describe("Render Donation Card Component", () => {
  beforeEach(testRender);
  afterEach(cleanup);

  it("Component Rendered Successfully", () => {
    const imgsrc = screen.getAllByAltText(data.name);
    const name = screen.getByText(data.name);
    const nominal = screen.getByText(data.nominal);
    const message = screen.getByText(data.message);

    expect(imgsrc).toBeTruthy();
    expect(name).toBeInTheDocument();
    expect(nominal).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
