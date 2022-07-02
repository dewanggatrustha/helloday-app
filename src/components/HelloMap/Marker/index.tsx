import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { RiMapPin2Fill } from "react-icons/ri";

interface MarkerProps {
	children: string;
	color: string;
}

const Marker = ({ children, color }: MarkerProps) => {
	return (
		<Button leftIcon={<RiMapPin2Fill color={color} size="35px" />}>
			{children}
		</Button>
	);
};

export default Marker;
