import { render, screen, cleanup } from "@testing-library/react";
import SquareVolunteerCard from "./index";

const data = {
	imageAlt: "tes",
	imageUrl:
		"https://awsimages.detik.net.id/community/media/visual/2021/01/23/potret-kalimantan-selatan-setelah-sepekan-dilanda-banjir-besar-2_169.jpeg?w=700&q=90",
	title: "Help our friend on South Kalimantan",
	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
	koordinator: "BNPB",
	achieved: "5",
	link: "#",
};

const testRender = () =>
	render(
		<>
			<SquareVolunteerCard
				imageAlt={data.imageAlt}
				imageUrl={data.imageUrl}
				title={data.title}
				desc={data.desc}
				koordinator={data.koordinator}
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
		const koordinator = screen.getByText(data.koordinator);

		expect(imageAlt).toBeTruthy();
		expect(title).toBeInTheDocument();
		expect(desc).toBeInTheDocument();
		expect(koordinator).toBeInTheDocument();
	});
});
