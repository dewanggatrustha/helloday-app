import { render, screen, cleanup } from "@testing-library/react";
import ContentCard from "./index";

const data = {
  imageAlt: "tes",
  imageUrl:
    "https://awsimages.detik.net.id/community/media/visual/2021/01/23/potret-kalimantan-selatan-setelah-sepekan-dilanda-banjir-besar-2_169.jpeg?w=700&q=90",
  title: "Help our friend on South Kalimantan",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  target: "Rp 20.000.000",
  progress: 80,
  achieved: "Rp 15.920.000",
  link: "#",
};

const testRender = () =>
  render(
    <>
      <ContentCard
        imageAlt={data.imageAlt}
        imageUrl={data.imageUrl}
        title={data.title}
        desc={data.desc}
        target={data.target}
        achieved={data.achieved}
      />
    </>
  );

describe("Render Emergency Card Component", () => {
  beforeEach(testRender);
  afterEach(cleanup);

  it("Component Rendered Successfully", () => {
    const imageAlt = screen.getAllByAltText(data.imageAlt);
    const title = screen.getByText(data.title);
    const desc = screen.getByText(data.desc);
    const target = screen.getByText(data.target);
    const achieved = screen.getByText(data.achieved);

    expect(imageAlt).toBeTruthy();
    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(target).toBeInTheDocument();
    expect(achieved).toBeInTheDocument();
  });
});
