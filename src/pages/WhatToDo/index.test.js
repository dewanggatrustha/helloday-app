// import { render, screen, cleanup } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import WhatToDo from "./index";
import { render, screen,cleanup } from "@testing-library/react";
import WhatToDo from "./index";
import {
  earthquakeInformation,
  earthquakeInstruction
} from "../../data/InstructionData";

afterEach(()=>{
    cleanup();
})

test("Test Disaster WhatToDo", () => {
  render(<WhatToDo />);
  const InstructionElement = screen.getByText('Instruction')
  const EmergencyCallsElement = screen.getByText('Emergency Calls')
  const earthquakeTitleElement = screen.getByText('Earthquake');
  const earthquakeDefinitionElement = screen.getByText(earthquakeInformation.disaster.definition);
  earthquakeInstruction.map((data)=>{
      expect(screen.getByText(data.name)).toBeInTheDocument();
      data.step.map((list)=>{
          expect(screen.getByText(list)).toBeInTheDocument()
      })
  })
  expect(InstructionElement).toBeInTheDocument();
  expect(EmergencyCallsElement).toBeInTheDocument();
  expect(earthquakeTitleElement).toBeInTheDocument();
  expect(earthquakeDefinitionElement).toBeInTheDocument();
});

// const testRender = () =>
// 	render(
// 		<>
// 			<WhatToDo />
// 		</>
// 	);

// describe("Render What to Do Pages", () => {
// 	beforeEach(testRender);
// 	afterEach(cleanup);

// 	it("Tab Component Rendered Successfully", () => {
// 		const InstructionTab = screen.getByText(/Instruction/i);
// 		const emergencyCallsTab = screen.getByText(/Emergency Calls/i);

// 		userEvent.click(emergencyCallsTab);

// 		expect(InstructionTab).toBeInTheDocument();
// 		expect(emergencyCallsTab).toBeInTheDocument();
// 	});

// 	it("Accordion Component Rendered Successfully", () => {
// 		render(<WhatToDo />);
//   		const InstructionElement = screen.getByText('Instruction')
//   		const EmergencyCallsElement = screen.getByText('Emergency Calls')
//   		const earthquakeTitleElement = screen.getByText('Earthquake');
//   		const earthquakeDefinitionElement = screen.getByText(earthquakeInformation.disaster.definition);
//   			earthquakeInstruction.map((data)=>{
//       		expect(screen.getByText(data.name)).toBeInTheDocument();
//       		data.step.map((list)=>{
//           expect(screen.getByText(list)).toBeInTheDocument()
//       })
//   })
//   expect(InstructionElement).toBeInTheDocument();
//   expect(EmergencyCallsElement).toBeInTheDocument();
//   expect(earthquakeTitleElement).toBeInTheDocument();
//   expect(earthquakeDefinitionElement).toBeInTheDocument();
// 	});

// 	it("Emergency Card Component Rendered Successfully", () => {
// 		const image = screen.getAllByAltText(/Ambulance/i);
// 		const name = screen.getByText(/Ambulance/i);
// 		const number = screen.getByText(/119/i);

// 		expect(image).toBeTruthy();
// 		expect(name).toBeInTheDocument();
// 		expect(number).toBeInTheDocument();
// 	});
// });
