import React from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";

const NavLink = ({ children }) => (
	<Link
		p="4px"
		m="4px"
		rounded={"md"}
		fontWeight="500"
		_hover={{
			textDecoration: "none",
			color: "black",
			bg: useColorModeValue("gray.100", "gray.700"),
		}}
		href={"#"}
	>
		{children}
	</Link>
);

export default NavLink;
