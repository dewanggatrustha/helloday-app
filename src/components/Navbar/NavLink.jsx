import React from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

const NavLink = ({ name, to }) => {
	return (
		<Link
			as={RouteLink}
			p="4px"
			m="4px"
			rounded={"md"}
			fontWeight="500"
			_hover={{
				textDecoration: "none",
				color: "black",
				bg: useColorModeValue("gray.100", "gray.700"),
			}}
			to={to}
		>
			{name}
		</Link>
	);
};

export default NavLink;
