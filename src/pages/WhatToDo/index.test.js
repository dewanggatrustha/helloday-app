import { render, screen, cleanup } from "@testing-library/react";
import WhatToDo from "./index";

const data = {
  disaster: {
    name: "Earthquake",
    definition:
      "Earthquake is a term used to describe both sudden slip on a fault, and the resulting ground shaking and radiated seismic energy caused by the slip, or by volcanic or magmatic activity, or other sudden stress changes in the earth.",
    image: [
      "https://cdn.britannica.com/34/127134-050-49EC55CD/Building-foundation-earthquake-Japan-Kobe-January-1995.jpg",
      "https://static01.nyt.com/images/2021/08/14/world/14haiti-earthquake-live-us-diaspora1/14haiti-earthquake-live-us-diaspora1-videoSixteenByNine3000.jpg",
      "https://images.newscientist.com/wp-content/uploads/2015/10/mg22830412.800-1_800.jpg?width=800",
    ],
  },
};

const testRender = () =>
  render(
    <>
      <WhatToDo
        name={data.disaster.name}
        definition={data.disaster.definition}
        image={data.disaster.image}
      />
    </>
  );

describe("Render Donation Card Component", () => {
  beforeEach(testRender);
  afterEach(cleanup);

  it("Component Rendered Successfully", () => {
    // const image = screen.getByText(data.disaster.image);
    const name = screen.getByText(data.disaster.name);
    const definition = screen.getByText(data.disaster.definition);

    // expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(definition).toBeInTheDocument();
  });
});
