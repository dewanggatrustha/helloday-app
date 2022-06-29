import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./pages/Weather";
import DisasterMap from "./pages/DisasterMap";
import Fundraising from "./pages/Fundraising";
import Volunteer from "./pages/Volunteer";
import WhatToDo from "./pages/WhatToDo";
import Navbar from "./components/Navbar";

export default function App() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route path="/whattodo">
					<WhatToDo />
				</Route>
				<Route path="/volunteer">
					<Volunteer />
				</Route>
				<Route path="/fundraising">
					<Fundraising />
				</Route>
				<Route path="/disastermap">
					<DisasterMap />
				</Route>
				<Route path="/">
					<Weather />
				</Route>
			</Switch>
		</>
	);
}
