import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Box } from "@chakra-ui/react";
import mapboxgl from "mapbox-gl";
import geoJson from "../../data/DisasterData/disasterData.json";
import Marker from "./Marker";

// Cant store access token in the env, mapBox problem
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

const Map = () => {
	const mapContainerRef = useRef(null);

	// Initialize map when component mounts
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [-87.65, 41.84],
			zoom: 5,
		});

		// Earthquake Marker
		// Render custom marker components
		geoJson.earthquake.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#DD6B20" // Orange.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Fire Marker
		geoJson.fire.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#E53E3E" // Red.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Fire Marker
		geoJson.fire.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#E53E3E" // Red.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Flood Marker
		geoJson.flood.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#3182CE" // Blue.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Landslide Marker
		geoJson.landSlide.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#38A169" // Green.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Tornado Marker
		geoJson.tornado.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#805AD5" // Purple.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Tsunami Marker
		geoJson.tsunami.forEach((disaster) => {
			// Create a React ref
			const ref = React.createRef();
			// Create a new DOM node and save it to the React ref
			ref.current = document.createElement("div");
			// Render a Marker Component on our new DOM node
			ReactDOM.render(
				<Marker
					disaster={disaster}
					color="#D53F8C" // Pink.500
				/>,
				ref.current
			);
			// Create a Mapbox Marker at our new DOM node
			new mapboxgl.Marker(ref.current)
				.setLngLat(disaster.geometry.coordinates)
				.addTo(map);
		});

		// Add navigation control (the +/- zoom buttons)
		map.addControl(new mapboxgl.NavigationControl(), "bottom-right");
		map.addControl(new mapboxgl.FullscreenControl(), "bottom-right");

		// Clean up on unmount
		return () => map.remove();
	}, []);

	return (
		<Box
			position="absolute"
			zIndex="1"
			w="95%"
			h="720px"
			bgColor="red.100"
			rounded="15px"
		>
			<Box
				ref={mapContainerRef}
				rounded="15px"
				position="absolute"
				zIndex="1"
				top="0"
				bottom="0"
				left="0"
				right="0"
			/>
		</Box>
	);
};

export default Map;
