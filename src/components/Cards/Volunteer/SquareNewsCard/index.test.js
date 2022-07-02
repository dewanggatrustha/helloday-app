import { render, screen, cleanup } from "@testing-library/react";
import SquareNewsCard from "./index";

const data = {
	imageAlt: "news card",
	imageBy:
		"https://upload.wikimedia.org/wikipedia/commons/5/57/UNICEF_Logo.png",
	title:
		"Indonesia's Merapi Spews Out Volcanic Lava And Ash, Hundreds Evacuate",
	desc: "Indonesia's Merapi volcano erupted overnight, sending hot lava and ash down its slopes and prompting over 250 residents in the surrounding area to evacuate, the country's disaster mitigation agency (BNPB) said on Thursday.",
	editor: "Kompas News",
	link: "https://www.ndtv.com/world-news/indonesias-merapi-spews-out-volcanic-lava-and-ash-hundreds-evacuate-2814237",
};

const testRender = () =>
	render(
		<>
			<SquareNewsCard
				imageAlt={data.imageAlt}
				imageUrl={data.imageUrl}
				title={data.title}
				desc={data.desc}
				editor={data.editor}
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
		const editor = screen.getByText(data.editor);

		expect(imageAlt).toBeTruthy();
		expect(title).toBeInTheDocument();
		expect(desc).toBeInTheDocument();
		expect(editor).toBeInTheDocument();
	});
});
