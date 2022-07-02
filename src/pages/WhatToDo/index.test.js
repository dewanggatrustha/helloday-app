import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WhatToDo from "./index";

const testRender = () =>
	render(
		<>
			<WhatToDo />
		</>
	);

describe("Render What to Do Pages", () => {
	beforeEach(testRender);
	afterEach(cleanup);

	it("Tab Component Rendered Successfully", () => {
		const InstructionTab = screen.getByText(/Instruction/i);
		const emergencyCallsTab = screen.getByText(/Emergency Calls/i);

		userEvent.click(emergencyCallsTab);

		expect(InstructionTab).toBeInTheDocument();
		expect(emergencyCallsTab).toBeInTheDocument();
	});

	it("Accordion Component Rendered Successfully", () => {
		const disasterTitle = screen.getByText(/Earthquake/i);
		const disasterDefinition = screen.getByText(
			/Earthquake is a term used to describe both sudden slip on a fault, and the resulting ground shaking and radiated seismic energy caused by the slip, or by volcanic or magmatic activity, or other sudden stress changes in the earth./i
		);
		const instructionTitle = screen.getByText(/Indoor/i);
		const instructionStep = screen.getByText(
			/Electronic devices are experiencing strange interference at home./i
		);

		expect(disasterTitle).toBeInTheDocument();
		expect(disasterDefinition).toBeInTheDocument();
		expect(instructionTitle).toBeInTheDocument();
		expect(instructionStep).toBeInTheDocument();
	});

	it("Emergency Card Component Rendered Successfully", () => {
		const image = screen.getAllByAltText(/Ambulance/i);
		const name = screen.getByText(/Ambulance/i);
		const number = screen.getByText(/119/i);

		expect(image).toBeTruthy();
		expect(name).toBeInTheDocument();
		expect(number).toBeInTheDocument();
	});
});
