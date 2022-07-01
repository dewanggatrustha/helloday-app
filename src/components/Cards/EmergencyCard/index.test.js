import { render, screen, cleanup } from "@testing-library/react";
import EmergencyCard from "./index";

const data = {
	name: "Ambulance",
	image: "https://drive.google.com/uc?export=view&id=1ck5U8KAcsEQiREpPKfPBjifCG0n_lcOd",
	number: 119,
};

const testRender = () =>
	render(
		<>
			<EmergencyCard
				name={data.name}
				image={data.image}
				alt={data.name}
				number={data.number}
			/>
		</>
	);

describe("Render Emergency Card Component", () => {
	beforeEach(testRender);
	afterEach(cleanup);

	it("Component Rendered Successfully", () => {
		const image = screen.getAllByAltText(data.name);
		const name = screen.getByText(data.name);
		const number = screen.getByText(data.number);

		expect(image).toBeTruthy();
		expect(name).toBeInTheDocument();
		expect(number).toBeInTheDocument();
	});
});
