import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";

const Marker = ({ onClick, children, color }) => {
	return (
		<Button
			onClick={onClick}
			className="marker"
			leftIcon={<RiMapPin2Fill color={color} size="35px" />}
		>
			{children}
		</Button>
	);
};

export default Marker;
